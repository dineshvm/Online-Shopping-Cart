import axios from 'axios'
import * as constant from '../../constants/constant'

export const getProducts = () => dispatch => {
  let url = '../data/products.json'
  axios.get(url).then(response => {
    dispatch({
      'type': constant.GET_PRODUCTS,
      'payload': response.data
    })
  })
}

export const addToCart = productId => {
  return {
    type: constant.ADD_TO_CART,
    productId
  }
}

export const removeFromCart = productId => {
  return {
    type: constant.REMOVE_FROM_CART,
    productId
  }
}
export const reduceProductQuantity = productId => {
  return {
    type: constant.REDUCE_QUANTITY,
    productId
  }
}