import * as constant from '../../constants/constant'
import {loadState} from '../../shared/util'
import _ from 'lodash'


const removeProduct = (state,id) => {
    let obj = {...state}
    if(_.has(state ,id)){
        _.get(state,id) === 1 ? delete obj[id] : (obj[id] = state[id]-1)
    }
    return obj
}

const initialState = loadState()

const cartReducer = (state = initialState ? initialState.cart : {} , action) => {
  switch (action.type) {    
    case constant.ADD_TO_CART:    
        return { 
            ...state,
            [action.productId]: (state[action.productId] || 0) + 1
        }
    case constant.REMOVE_FROM_CART:
        let value= {...state}
        delete value[action.productId]
        return value
    case constant.REDUCE_QUANTITY:
        let values= removeProduct(state,action.productId)
        return values
    default:
        return state
  }
}

export default cartReducer
