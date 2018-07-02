import { AVAILABILITIES, DETAIL} from './types'
import { network } from '../../helper'

export const getProducts = (query: string)=>  {
  return (dispatch: any) => dispatch(
    {
      type: AVAILABILITIES,
      payload: network().get(`?search=${query}`)
    }
  );
};

export const getProduct = (id: string)=>  {
  return (dispatch: any) => dispatch(
    {
      type: DETAIL,
      payload: network().get(`${id}`)
    }
  );
};
