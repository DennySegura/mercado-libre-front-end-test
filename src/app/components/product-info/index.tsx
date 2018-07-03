import * as React from 'react';
import { helper } from '../../helper'

export default ({condition, price, title, sold_quantity}: any)=> {
  return (
    <div className={'column'}>
      <span className={'anotation mb'}>{`${condition} - ${sold_quantity} vendidos`}</span>
      <span className={'headline'}>{title}</span>
      <span className={'price--container mv3'}>
        <span className={'price--amount mr'}>{'$'}</span>
        <span className={'price--amount'}>{helper.moneyFormat(price.amount)}</span>
        <span className={'price--decimals'}>
          {price.decimals === 0 ? "00": price.decimals}
        </span>
      </span>
    </div>
  );
}
