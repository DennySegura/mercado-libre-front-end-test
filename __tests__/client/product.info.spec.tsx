import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ProductInfo from '../../src/app/components/product-info';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../src/app/config/translations';

describe('Test suites for react components', () => {
  it('It should render <ProductInfo />', () => {
    const data = {
      title: 'Smart Tv 4k 50  Samsung Un50mu6100',
      condition: 'new',
      sold_quantity: 500,
      price: {
        decimals: 0,
        amount: 21999,
        currency: 'ARS'
      }
    }
    const _product_info = renderer.create(
      <I18nextProvider i18n={i18n}>
        <ProductInfo {...data} />
      </I18nextProvider>);
    const product_info_tree = _product_info.toJSON();
    expect(product_info_tree).toMatchSnapshot();
  });
});
