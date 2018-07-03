import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ProductDescription from '../../src/app/components/product-description';

describe('Test suites for react components', () => {
  it('It should render <ProductDescription />', () => {
    const _product_description = renderer.create(<ProductDescription description={'Test'}/>);
    let product_description_tree = _product_description.toJSON();
    expect(product_description_tree).toMatchSnapshot();
  });
});
