import * as actions from '../../src/app/flux/api/actions';
import * as types from '../../src/app/flux/api/types';
import reducer from '../../src/app/flux/api/reducer';

describe('Test suites for redux actions', () => {
  it('It should create an action to change app-bar input value', () => {
    const text = 'iphone';
    const action = {type: types.INPUT_CHANGE, payload: text};
    expect(actions.updateInput(text)).toEqual(action);
  });
});

describe('Test suites for redux reducers', () => {
  it('It should return the initial state', () => {
    const initialState = { availability:{}, detail: {}, searched: null };
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('It should return state with changed input', () => {
    const expectedState = { availability:{}, detail: {}, searched: 'iphone' };
    expect(reducer(undefined, {type:types.INPUT_CHANGE, payload:'iphone' })).toEqual(expectedState);
  });
  it('It should return state with availability cleared', () => {
    const expectedState = { availability:{}, detail: {}, searched: null };
    const distyState = { availability:{data:'hola'}, detail: {}, searched: null };
    expect(reducer(distyState, {type:types.CLEAR, payload:'availability' })).toEqual(expectedState);
  });
});
