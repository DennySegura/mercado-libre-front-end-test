import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BreadCrumb from '../../src/app/components/breadcrumb';

describe('Test suites for react components', () => {
  it('It should render <BreadCrumb />', () => {
    const categories = ['Electrónica, Audio y Video','Televisores','TV 4K','50"','Samsung'];
    const _breadcrumb = renderer.create(<BreadCrumb categories={categories}/>);
    let breadcrumb_tree = _breadcrumb.toJSON();
    expect(breadcrumb_tree).toMatchSnapshot();
  });
});
