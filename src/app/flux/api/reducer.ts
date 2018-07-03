import { createReducer } from '../config';
import { AVAILABILITIES, DETAIL, CLEAR, INPUT_CHANGE } from './types';
const defaultState: any = {
  availability:{},
  detail: {},
  searched: null
};
const error_availabilities = (state: any = defaultState, { payload }:any): any => {
  const { data } = payload.response.data
  state.availability.error = data;
  state.availability.data = undefined;
  return ({ ...state });
};
const error_detail = (state: any = defaultState, { payload }:any): any => {
  const { data } = payload.response.data
  state.detail.error = data;
  state.detail.data = undefined;
  return ({ ...state });
};
const availabilities_data = (state: any = defaultState, { payload }:any): any => {
  state.availability.error = undefined;
  state.availability.data = payload;
  return ({ ...state });
};
const detail_data = (state: any = defaultState, { payload }:any): any => {
  state.detail.error = undefined;
  state.detail.data = payload;
  return ({ ...state });
};
const clean = (state: any = defaultState, { payload }: any): any => {
  let newState = {...state};
  newState[payload] = {};
  return newState;
};
const input_change = (state: any = defaultState, { payload }: any): any => {
  return {...state, searched: payload};
};
const descriptor = {
    [`${AVAILABILITIES}_FULFILLED`]: availabilities_data,
    [`${AVAILABILITIES}_REJECTED`]: error_availabilities,
    [`${DETAIL}_FULFILLED`]: detail_data,
    [`${DETAIL}_REJECTED`]: error_detail,
    [INPUT_CHANGE]: input_change,
    [CLEAR]: clean
}
export default createReducer(defaultState, descriptor);
