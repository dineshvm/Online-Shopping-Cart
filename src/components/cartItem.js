import React from 'react';
import * as constant from '../constants/constant'

const CartItem = ({ item, Qty, onClick }) => {
    return (
        <tr key={`cart-item_row ${item.productId}${Math.random()}`}>
            <td className="col-sm-8 col-md-6"><span><strong> {item.brandName}</strong> {item.productName}</span></td>
            <td className="col-sm-1 col-md-1 text-center"><strong>{Qty}</strong></td>
            <td className="col-sm-1 col-md-1 text-center"><strong>{constant.CURRENCY}.{Qty * item.price}</strong></td>
            <td className="col-sm-1 col-md-1">
                <button type="button" class="btn btn-danger" onClick={onClick}>
                    <span class="glyphicon glyphicon-remove"></span>X
                </button>
            </td>
        </tr>
    );
}

export default CartItem;
