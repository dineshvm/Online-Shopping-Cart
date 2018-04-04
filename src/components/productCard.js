import React from 'react';
import * as constant from '../constants/constant'

const ProductCard = ({ item , Qty, inCart ,addClick, removeClick }) => {
    return (
        <div className='col-4 productCard' key= {`card-${item.productId}`}>
            <div className='card'>
                <img className='card-img-top productImage' src={item.productImage} alt={item.productName} />
                <div className='card-body'>
                    <h4 className='card-title'>{item.brandName}</h4>
                    <p className='card-text'>{item.productName} <small>{item.details}</small></p>
                    <span> {constant.CURRENCY}.{item.price}</span>
                    <div className="product__button-wrap">
                        {
                            inCart ? 
                            [<button type="button" className="btn btn-danger" onClick={removeClick}>-</button>,
                            <span className='buttonText'> {Qty} in Cart</span>,
                            <button type="button" className="btn btn-success" onClick={addClick}>+</button>]
                            :
                            <button type="button" className="btn btn-success" onClick={addClick}>Add To Cart</button>
                        }
                           
                    </div>
                </div>
            </div>
         </div>
    )
}

export default ProductCard;
