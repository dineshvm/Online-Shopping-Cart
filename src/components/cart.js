import React from 'react';
import CartItem from './cartItem';
import _ from 'lodash'
import {getProductById} from '../shared/util'
import * as constant from '../constants/constant'

const Cart = props => {
    const {cart,totalItems ,totalPrice, products, removeFromCart} = props
    return (
        <div>
            <h3>Shopping Cart Summary</h3> 
            { totalItems > 0 && ([
                <div>
                    <span className="cart__totalItems"> <strong>No Of Items:</strong> {totalItems} </span>
                    <span className="cart__totalPrice"> <strong>Total Price:</strong> {constant.CURRENCY}.{totalPrice} </span>
                </div>,
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>TotalPrice</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            _.map(cart , (value ,key) => {
                               return <CartItem key={`cart-item ${key}${Math.random()}`} 
                                Qty={value} 
                                item={ getProductById(products, key)} 
                                onClick={()=> removeFromCart(key)} /> 
                            }) 
                        }
                    </tbody>
                </table>
            ] )} 
            {totalItems === 0 && (
                 <div className="alert alert-info">Cart is empty</div>
            )}

        </div>
    );
}
export default Cart;