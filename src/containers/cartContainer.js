import Cart from '../components/cart';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTotalItems , getTotalPrice } from '../shared/util';
import * as actions from '../store/actions/rootActions';

const mapStateToProps = state => ({  
      products: state.products,
      cart: state.cart,
      totalItems: getTotalItems(state),
      totalPrice: getTotalPrice(state)
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch); 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
 )(Cart);
