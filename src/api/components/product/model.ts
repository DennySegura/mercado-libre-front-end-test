/// <reference path="./index.d.ts" />
export default class Product implements Item {

    public id: string;
    public title: string;
    public price: ItemPrice;
    public picture: string;
    public condition: string;
    public free_shipping: boolean;
    public sold_quantity: number;
    public description: string;
    public location: string;

    constructor(item: any) {
        this.item = item;
    }
    set image(image: string) {
        this.picture = image;
    }
    set soldQuantity(sold_quantity: number) {
        this.sold_quantity = sold_quantity;
    }
    set text(description: string) {
        this.description = description;
    }
    set detail({ sold_quantity, description }: any) {
        this.sold_quantity = sold_quantity;
        this.description = description;
    }
    set item(item: any) {
        const amount = Math.floor(item.price);
        this.id = item.id;
        this.title = item.title;
        this.price = {
            decimals: Number(((item.price - amount) * 100).toFixed(0)),
            amount,
            currency: item.currency_id
        };
        this.picture = item.thumbnail;
        this.condition = item.condition;
        this.free_shipping = item.shipping.free_shipping;
        this.location = item.seller_address.state.name;
    }
    get item(): any {
        const { id, title, price, picture, condition, free_shipping, location, sold_quantity, description } = this;
        return { id, title, price, picture, condition, free_shipping, location, sold_quantity, description };
    }
}
