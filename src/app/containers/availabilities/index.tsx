import { connect } from 'react-redux';
import { getProducts, clean, updateInput } from '../../flux/api/actions';
import Content from './content';
import Layer from '../layer';

const stateToProp = ({ api }: any) => {
  return {
    data: api.availability.data,
    error: api.availability.error,
    keyword: api.searched
  };
};
const dispatchToProps = (dispatch: any) => {
  return {
    searchProducts(value: string) { dispatch(getProducts(value)); }
    clearWindow(value: string ){ dispatch(clean(value)); },
    changeInput(value: string) { dispatch(updateInput(value)); }
  };
};
export default connect(stateToProp, dispatchToProps)(Layer(Content));
