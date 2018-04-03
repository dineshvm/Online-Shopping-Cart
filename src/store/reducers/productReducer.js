import * as constant from '../../constants/constant'

const productReducer= (state = [], action = {}) => {
    switch (action.type) {
        case constant.GET_PRODUCTS:
            return action.payload
        default:
            return state;
    }
}

export default productReducer