import React , { Component } from 'react'
import ProductCard from './productCard'
import _ from 'lodash'
import {getQuantityById} from '../shared/util'

class Product extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    this.props.getProducts()
  }
  render () {
    const { products, cart, addToCart, reduceProductQuantity } = this.props
    const isInCart = (id) => {
      return _.has(cart , id)
    }
    return (
      <div className='productContainer'>
        <h3 className='left-pane-title'>Products</h3>
        <div className='container'>
          <div className='row'>
            {products.map(product => (
								<ProductCard 
								  key= {`card-${product.productId}${Math.random()}`}
									item={product} 
									Qty = {getQuantityById(cart, product.productId)}
									inCart={isInCart(product.productId)}
									addClick={()=> addToCart(product.productId)}
									removeClick={()=> reduceProductQuantity(product.productId)}
									/>
							))}
          </div>
        </div>
      </div>
    )
  }
}

export default Product
