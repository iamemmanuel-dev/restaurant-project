import {
  handleFilters,
  retrieve__cartItems,
  retrieve__localData,
  re__render,
  saveCartToLocalStorage,
  save__data__locally,
} from '../Assets/Utils.js'
import CartSummary from '../Components/CartSummary.js'
import Footer from '../Components/Footer.js'
import Nav from '../Components/Nav.js'
import Thread from '../Components/Thread.js'

const Cart = {
  after__render() {
    const cart__body = document.querySelector('.cart__body')
    const cartItems = retrieve__cartItems()

    const populateCart = () => {
      cart__body.innerHTML = cartItems
        .map(items => {
          const { id, img, title, price, amount } = items
          return `<div class='cart__body-content'>
          <div class='cart__body-content__col-1'>
            <button class='deleteCartBtn' data-id=${id}>X</button>
            <div class='cart__img-container'>
              <img src='${img}' alt=${title} />
            </div>
            <div class='cartitem__desc'>
              <h3>${title || 'undefined'}</h3>
              <h4 class='cartitem__price'>$${parseFloat(price).toFixed(2)}</h4>
            </div>
          </div>
          <h3 class='cart__body-content__col-2'>$${parseFloat(price).toFixed(
            2
          )}</h3>
          <div class='cart__body-content__col-3'>
            <button class='cart__btn incrementBtn' data-id=${id}>+</button>
            <span class='cartPage__amount'>${amount}</span>
            <button class='cart__btn decrementBtn' data-id=${id}>-</button>
          </div>
          <h3 class='cart__body-content__col-4'>$${parseFloat(
            price * amount
          ).toFixed(2)}</h3>
        </div>`
        })
        .join('')
    }

    populateCart()

    document.querySelectorAll('.incrementBtn').forEach(btn => {
      btn.addEventListener('click', ({ currentTarget }) => {
        const { id } = currentTarget.dataset
        let cartItems = retrieve__cartItems()
        cartItems = cartItems.map(items =>
          items.id === +id ? { ...items, amount: items.amount + 1 } : items
        )
        saveCartToLocalStorage(cartItems)

        re__render(this)
      })
    })

    document.querySelectorAll('.decrementBtn').forEach(btn => {
      btn.addEventListener('click', ({ currentTarget }) => {
        const { id } = currentTarget.dataset
        let cartItems = retrieve__cartItems()
        cartItems = cartItems.map(items =>
          items.id === +id && items.amount > 1
            ? { ...items, amount: items.amount - 1 }
            : items
        )
        saveCartToLocalStorage(cartItems)

        re__render(this)
      })
    })

    document.querySelectorAll('.deleteCartBtn').forEach(btn => {
      const { id } = btn.dataset
      btn.addEventListener('click', () => {
        const cartItems = handleFilters(id)
        saveCartToLocalStorage(cartItems)
        const upDatedProducts = retrieve__localData().map(items =>
          items.id === +id ? { ...items, inCart: false } : items
        )
        save__data__locally(upDatedProducts)

        re__render(this)
      })
    })

    return `${Thread.after__render()} ${CartSummary.after__render()}`
  },
  render() {
    return `
        <header id='cart__header'>
          ${Nav.render()}
          <div class='cart__header-content'>
            <h1>Shopping Cart</h1>
            <h3>
              <span>Home</span> ><span>Shopping Cart</span>
            </h3>
          </div>
        </header>
        ${Thread.render()}
        ${
          retrieve__cartItems().length < 1
            ? `<div class='empty__cart-container'>
              <h2>Your Cart is currently empty</h2>
              <a href="/#/restaurant">go shopping</a>
            </div>`
            : `<h2 class='cartCenterTitle'>Your Cart</h2>
        <div class='cart__center container'>
          <div class='cart__head'>
            <h3 class='cart__head-product'>Products</h3>
            <h3 class='cart__head-price'>Price</h3>
            <h3 class='cart__head-qtty'>Quantity</h3>
            <h3 class='cart__head-sub'>Subtotal</h3>
          </div>
          <div class='cart__body'></div>
        </div>
        ${CartSummary.render()}
        `
        }
        ${Footer.render()}
        `
  },
}

export default Cart
