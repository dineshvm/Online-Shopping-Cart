import Product from '../components/product'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions/rootActions'

const mapStateToProps = state => ({  
      products: state.products,
      cart:state.cart
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Product);
