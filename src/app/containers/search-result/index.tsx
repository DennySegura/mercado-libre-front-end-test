import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as queryString from 'query-string';
import AppBar from '../../components/app-bar';
import BreadCrumb from '../../components/breadcrumb';
import Description from '../../components/product-description';
import ProductInfo from '../../components/product-info';
import Button from '../../components/button';

const categories: string[] =  [
  "Electrónica, Audio y Video",
  "Televisores",
  "TV LED",
  "32\"",
  "Otras Marcas"
];
const item= {
  "id": "MLA716454202",
  "title": "Smart Tv 4k 50  Samsung Un50mu6100",
  "price": {
    "decimals": 0,
    "amount": 21999,
    "currency": "ARS"
  },
  "picture": "http://mla-s1-p.mlstatic.com/849004-MLA27124959188_042018-O.jpg",
  "condition": "new",
  "free_shipping": false,
  "sold_quantity": 500,
  "description": ""
};
export default class SearchBox extends React.Component {
  render() {
    const { match, availabilities=[] }:any = this.props;
    return (
      <div>
        {item.title && <Helmet>
          <meta charSet="utf-8" />
          <title>{item.title}</title>
          <meta name="description" content={item.description}/>
          <link rel="canonical" href={'http://localhost:3000/items/${match.params.id}'} />
        </Helmet>}
        <AppBar/>
        <div className={'screen__content'}>
          <BreadCrumb categories={categories}/>
          <div className={'screen__content--info ph3 row'}>
            <div className={'flex__item__9'}>
              <img src={item.picture} className={'detail__image'} alt={'detail_image'}/>
              <Description description={item.description}/>
            </div>
            <div className={'flex__item__3'}>
              <ProductInfo {...item}/>
              <Button text={'Comprar'}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
