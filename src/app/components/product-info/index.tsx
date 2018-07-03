/// <reference path="../../index.d.ts"/>
import * as React from 'react';
import { translate } from 'react-i18next';
import { helper } from '../../helper';

const ProductInfo = ({ condition, price, title, sold_quantity, t }: ProductInfoProps) => {
  return (
    <div className={'column'}>
      <span className={'anotation mb'}>{`${t(condition)} - ${sold_quantity} ${t('sold')}`}</span>
      <span className={'headline'}>{title}</span>
      <span className={'price--container mv3'}>
        <span className={'price--amount mr'}>{'$'}</span>
        <span className={'price--amount'}>{helper.moneyFormat(price.amount)}</span>
        <span className={'price--decimals'}>
          { price.decimals === 0 ? '00' : price.decimals }
        </span>
      </span>
    </div>
  );
};

export default translate('translations')(ProductInfo);
