import * as React from 'react';
import { helper } from '../../helper'
const item = {
  "id": "MLA726036382",
  "sold_quantity": 500,
  "title": "Iphone 7 Plus 128gb Nuevos Sellados Promo Oportunidad Libres",
  "price": {
    "decimals": 95,
    "amount": 4000,
    "currency": "ARS"
  },
  "picture": "http://mla-s1-p.mlstatic.com/943893-MLA27200959891_042018-I.jpg",
  "condition": "new",
  "free_shipping": true,
  "location": "Capital Federal"
};
export default class SearchBox extends React.Component {
  render() {
    return (
      <div className={'item__container pv'}>
        <img src={'http://mla-s2-p.mlstatic.com/967347-MLA25979285510_092017-I.jpg'} className={'item__image mr'}/>
        <div className={'item__info--container'}>
          <div className={'item__description--container mt'}>
            <span className={'item__price--container mb3'}>
              <span className={'item__price--currency'}>{'$'}</span>
              <span className={'item__price--amount'}>{helper.moneyFormat(item.price.amount)}</span>
              {item.price.decimals>0 && <span className={'item__price--decimals'}>{item.price.decimals}</span>}
              {item.free_shipping && <img className={'item__free_shipping'} src={require('../../assets/img/ic_shipping.png')}/>}
            </span>
            <span className={'item__description'}>{item.title}</span>
          </div>
          <span className={'caption tc-dusty-gray mt3 item__location'}>{item.location}</span>
        </div>
      </div>
    );
  }
}
