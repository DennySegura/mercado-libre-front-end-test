import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Item from '../../src/app/components/result-list-item';

describe('Test suites for react components', () => {
  it('It should render <Item />', () => {
    const data ={
      title: 'Smart Tv 4k 50  Samsung Un50mu6100',
      price: {
        decimals: 0,
        amount: 21999,
        currency: 'ARS'
      },
      picture: 'http://mla-s1-p.mlstatic.com/849004-MLA27124959188_042018-I.jpg',
      free_shipping: false,
      location: 'Capital Federal'
    };
    const _item = renderer.create(<Item { ...data }/>);
    let item_tree = _item.toJSON();
    expect(item_tree).toMatchSnapshot();
  });
});
