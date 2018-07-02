/// <reference path="./index.d.ts" />
import axios, { AxiosResponse } from 'axios';
import { endPoints } from './end-point';
import { AUTHOR } from '../../../env';
import Product from './model';
import { helper as _ } from '../../../core/helpers';
import { ErrorService } from '../../errors';

export const Service = {
    getItems: async (body: any, headers: any) => {
        try {
            const { search } = body;
            const url = endPoints['search-box']({ query:search });
            const response: AxiosResponse<SearchResult> = (await axios.get(url, { headers }));
            let categories = _.groupBy(response.data.results, (item: any) => item.category_id);
            categories = _.objectToArray(categories, (key: string) => ({ key, value: categories[key].length }));
            categories.sort(_.sortAB);
            const category_url = endPoints['categories']({ category: categories[0].key });
            const category_response: AxiosResponse<CategoryResponse> = (await axios.get(category_url, { headers }));
            return {
                author: AUTHOR,
                categories: category_response.data.path_from_root.map((el: Pathfromroot) => el.name),
                items: response.data.results.map((el: SearchResultItem) => new Product(el).item)
            };
        }
        catch (err) {
            throw { ...err, node_stack: new Error(err) };
        }
    },
    getItem: async (body: any, headers: any) => {
        try {
            const { id } = body;
            const url = endPoints['item']({ id });
            const description_url = endPoints['item-description']({ id });
            const response: any = await Promise.all([axios.get(url, { headers }), axios.get(description_url, { headers })]);
            const detail: SearchResultItem = response[0].data;
            const description: SearchItemDescription = response[1].data;
            const category_url = endPoints['categories']({ category: detail.category_id });
            const category_response: AxiosResponse<CategoryResponse> = (await axios.get(category_url, { headers }));
            const product = new Product(detail);
            product.soldQuantity = detail.sold_quantity;
            product.text = description.plain_text;
            product.image = (detail.pictures || [{ url: detail.thumbnail }])[0].url;
            return {
                author: AUTHOR,
                categories: category_response.data.path_from_root.map((el: Pathfromroot) => el.name),
                items: product.item
            };
        }
        catch (err) {
            throw { ...err, message:err.message, node_stack: new Error(err) };
        }
    }
};
