import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '../../src/app/components/button';

describe('Test suites for react components', () => {
  it('It should render <Button />', () => {
    const _button = renderer.create(<Button text={'Test'}/>);
    let button_tree = _button.toJSON();
    expect(button_tree).toMatchSnapshot();
  });
});
