import * as React from 'react';
import { helper } from '../../helper'

export default ({price, title, picture, free_shipping, location }:any)=> {
  return (
    <div className={'item__container pv'}>
      <img src={picture} className={'item__image mr'} alt={'availability_image'}/>
      <div className={'item__info--container'}>
        <div className={'item__description--container mt'}>
          <span className={'item__price--container mb3'}>
            <span className={'item__price--currency'}>{'$'}</span>
            <span className={'item__price--amount'}>{helper.moneyFormat(price.amount)}</span>
            {price.decimals>0 && <span className={'item__price--decimals'}>{price.decimals}</span>}
            {free_shipping && <img className={'item__free_shipping'} src={require('../../assets/img/ic_shipping.png')}/>}
          </span>
          <span className={'item__description'}>{title}</span>
        </div>
        {location && <span className={'caption tc-dusty-gray mt3 item__location'}>{location}</span>}
      </div>
    </div>
  );
};
