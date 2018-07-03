import { AVAILABILITIES, DETAIL, CLEAR, INPUT_CHANGE } from './types';
import { network } from '../../helper';

export const getProducts: any = (query: string) =>  (dispatch: any) => dispatch({type: AVAILABILITIES, payload: network().get(`?q=${query}`)});
export const getProduct: any = (id: string) =>  (dispatch: any) => dispatch({ type: DETAIL, payload: network().get(`${id}`)});
export const clean: any = (key: string) => ({ type: CLEAR, payload: key });
export const updateInput: any = (value: string) => ({type: INPUT_CHANGE, payload: value});
