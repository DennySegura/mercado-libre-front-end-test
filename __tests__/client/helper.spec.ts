import 'jest';
import { helper } from '../../src/app/helper';

describe('Client Helpers test suite', () => {
  it('It should expect transfor number to money format', () => {
    expect(helper.moneyFormat(50000)).toEqual('50.000');
  });
});
