import { retrieve__cartItems } from '../Assets/Utils.js'

const CartSummary = {
  after__render() {
    const homeInput = document.getElementById('home')
    homeInput.checked = true
    let defaultPrice =
      homeInput.nextElementSibling.nextElementSibling.textContent
    defaultPrice = defaultPrice.replace('$', '')

    let sub__price = +defaultPrice
    let cartTotal = retrieve__cartItems().reduce(
      (a, c) => a + c.price * c.amount,
      sub__price
    )

    document.querySelector('.cartSummaryTotal').textContent = `$${cartTotal}`

    const saveShippingData = () =>
      localStorage.setItem(
        'ShippingDetails',
        JSON.stringify([{ cartTotal, sub__price }])
      )
    saveShippingData()

    const input = document.querySelectorAll('.cart__radio')
    input.forEach(inp => {
      inp.addEventListener('change', e => {
        const val =
          e.currentTarget.nextElementSibling.nextElementSibling.textContent
        const price = +val.replace('$', '')
        sub__price = price

        cartTotal = retrieve__cartItems().reduce(
          (a, c) => a + c.price * c.amount,
          sub__price
        )

        document.querySelector(
          '.cartSummaryTotal'
        ).textContent = `$${cartTotal}`
        saveShippingData({ cartTotal, sub__price })
      })
    })
  },
  render() {
    const cartTotal = retrieve__cartItems().reduce(
      (a, c) => a + c.price * c.amount,
      0
    )

    return `
      <div class='cart__summary-section'>
        <div class='cart__summary-container'>
          <div class='cart__sumary-header'>
            <h3>Cart total</h3>
          </div>
          <div class='cart__sumary-body'>
            <div>
              <h4>subtotal</h4>
              <h5>$${parseFloat(cartTotal).toFixed(2)}</h5>
            </div>

            <div>
              <h4>delivery</h4>
              <div>
                <div class='cart__options'>
                  <div class='cart__form-container'>
                    <input type='radio' name='delivery' id='home' class='transac__radio cart__radio' />
                    <label for='home' class='option__label'>Home <span class='custom__radio'></span></label>
                    <h6>$14.99</h6>
                  </div>
                </div>

                <div class='cart__options'>
                  <div class='cart__form-container'>
                    <input type='radio' name='delivery' id='office' class='transac__radio cart__radio' />
                    <label for='office' class='option__label'>office <span class='custom__radio'></span></label>
                    <h6>$9.99</h6>
                  </div>
                </div>

                <div class='cart__options'>
                  <div class='cart__form-container'>
                    <input type='radio' name='delivery' id='poc' class='transac__radio cart__radio' />
                    <label for='poc' class='option__label'>poc <span class='custom__radio'></span></label>
                    <h6>$4.99</h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4>Total</h4>
              <h5 class='cartSummaryTotal'>$${parseFloat(cartTotal).toFixed(
                2
              )}</h5>
            </div>
              <a href='/#/checkout' class='check__out-btn'>proceed to checkout</a>
          </div>
        </div>
      </div>
    `
  },
}

export default CartSummary
