export const re__render = x => {
  document.querySelector('#app').innerHTML = x.render()
  if (x.after__render) {
    x.after__render()
  }
}

export const save__data__locally = data =>
  localStorage.setItem('Data', JSON.stringify(data))

export const retrieve__localData = () =>
  localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')) : []

export const nigerianMeal = () =>
  retrieve__localData().filter(
    items => items.category === 'nigerian' && items.featured
  )

export const chineseMeal = () =>
  retrieve__localData().filter(
    items => items.category === 'chinese' && items.featured
  )

export const englishMeal = () =>
  retrieve__localData().filter(
    items => items.category === 'english' && items.featured
  )

export const desserts = () =>
  retrieve__localData().filter(
    items => items.category === 'burger' && items.featured
  )

export const allCategories = [
  'All',
  ...new Set(retrieve__localData().map(items => items.category)),
]

export const findClickedProduct = id =>
  retrieve__localData().find(items => items.id === +id)

export const saveCartToLocalStorage = cart =>
  localStorage.setItem('Cart', JSON.stringify(cart))

export const retrieve__cartItems = () =>
  localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : []

export const addProductToCart = product => {
  let cartItems = retrieve__cartItems()
  cartItems = [...cartItems, product]
  saveCartToLocalStorage(cartItems)
}

export const handleFilters = id =>
  retrieve__cartItems().filter(items => items.id !== +id)
