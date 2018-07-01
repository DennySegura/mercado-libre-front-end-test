import * as React from 'react';
import { helper } from '../../helper'

export default ({condition, price, title, sold}: any)=> {
  return (
    <div>
      <span className={'anotation'}>{`${condition} - ${sold} vendidos`}</span>
      <h1 className={'headline'}>{title}</h1>
      <span className={'price--container mv3'}>
        <span className={'price--amount mr'}>{'$'}</span>
        <span className={'price--amount'}>{helper.moneyFormat(price.amount)}</span>
        {price.decimals>0 && <span className={'price--decimals'}>{price.decimals}</span>}
      </span>
    </div>
  );
}
