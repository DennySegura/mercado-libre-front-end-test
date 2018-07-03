import { connect } from 'react-redux';
import { clean, getProduct } from '../../flux/api/actions';
import Content from './content';
import Layer from '../layer';

const stateToProp = ({ api }:any) => {
  return {
    data: api.detail.data,
    error: api.detail.error
  }
}
const dispatchToProps = (dispatch: any) => {
  return {
    searchProduct(value: string) {dispatch(getProduct(value))},
    clearWindow(value: string){dispatch(clean(value))}
  }
}
export default connect(stateToProp, dispatchToProps)(Layer(Content))
