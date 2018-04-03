import React, { Component } from 'react'
import ProductsContainer from './containers/productContainer'
import CartContainer from './containers/cartContainer'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='App-title'>Online Shopping Cart</h1>
          </div>
        </div>
        <hr/>
        <div className='row'>
          <div className='col-8'>
            <ProductsContainer />
          </div>
          <div className='col-4'>
            <CartContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default App
