import _ from 'lodash'

export const getObjectSize = (obj) => {
  return Object.keys(obj).length || 0
}

export const getProductPriceById = (value, productId) => {
  let price = _.result(
    _.find(value, (item) => {
      return item.productId == productId
    }), 'price'
  )
  return price
}
export const getProductById = (value, productId) => {
  return _.find(value, (item) => {
    return item.productId == productId
  })
}

export const getQuantityById = (value, productId) => {
  return value[productId] || 0
}

export const getTotalItems = (state) => {
  return getObjectSize(state.cart)
}

export const getTotalPrice = (state) => {
  let total = 0
  _.forIn(state.cart, (value, key) => {
    let price = getProductPriceById(state.products, key)
    total += (price * value)
  })
  return total
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // ignore error
  }
}
