import { connect } from 'react-redux'
import { getProducts, getProduct } from '../../flux/api/actions.ts'
import Content from './content'

const stateToProp = null;
const dispatchToProps = (dispatch: any) => {
    return {
        searchProducs(value: string) {
            dispatch(getProducts(value))
        },
        searchProduct(id:string){
          dispatch(getProduct(id))
        }
    }
}
export default connect(stateToProp, dispatchToProps)(Content)
