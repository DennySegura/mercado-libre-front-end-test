import { AVAILABILITIES, DETAIL, CLEAR, INPUT_CHANGE } from './types'
import { network } from '../../helper'

export const getProducts = (query: string)=>  (dispatch: any) => dispatch({type: AVAILABILITIES,payload: network().get(`?q=${query}`)});
export const getProduct = (id: string)=>  (dispatch: any) => dispatch({ type: DETAIL, payload: network().get(`${id}`)});
export const clean = (key: string) => ({ type: CLEAR, payload: key });
export const updateInput = (value: string) => ({type: INPUT_CHANGE, payload: value})
