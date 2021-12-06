import { retrieve__cartItems } from '../Assets/Utils.js'
import Footer from '../Components/Footer.js'
import Nav from '../Components/Nav.js'
import Thread from '../Components/Thread.js'

const Checkout = {
  after__render() {
    return `${Thread.after__render()}`
  },
  render() {
    const route = document.location.hash.split('/')[1]
    const products = () =>
      retrieve__cartItems()
        .map(
          items =>
            `<span class='checkout__inCartItems'>${items.title} X ${items.amount}</span>`
        )
        .join('')
    const { cartTotal, sub__price } = JSON.parse(
      localStorage.getItem('ShippingDetails')
    )[0]

    const productTotal = cartTotal - sub__price

    return `
        <header id='cart__header'>
          ${Nav.render()}
          <div class='cart__header-content'>
            <h1>Shopping Cart</h1>
            <h3>
              <span>Home</span>><span>${route}</span>
            </h3>
          </div>
        </header>
        ${Thread.render()}
        <section id='checkout__center'>
          <h1>Billing details</h1>
          <form class='checkout__form'>
            <div class='checkout__name-container form__control'>
              <div class='checkout__name1'>
                <input
                  type='text'
                  placeholder='first name'
                  class='name__input'
                  id='firstName'
                  required
                />
                <label for='firstName' class='name__label'>
                  first name <span class='required'>*</span>
                </label>
              </div>
              <div class='checkout__name2'>
                <input
                  type='text'
                  placeholder='last name'
                  class='name__input'
                  id='lastName'
                  required
                />
                <label for='lastName' class='name__label'>
                  last name <span class='required'>*</span>
                </label>
              </div>
            </div>
            <div class='form__control'>
              <label for='company'>Company name (optional) </label>
              <input type='text' id='company' />
            </div>

            <div class='form__control'>
              <label for='address'>
                Street/Work address <span class='required'>*</span>
              </label>
              <input type='text' id='address' required />
            </div>

            <div class='form__control'>
              <label for='townCity'>
                Town/City <span class='required'>*</span>
              </label>
              <input type='text' id='townCity' required />
            </div>

            <div class='form__control'>
              <label for='zipCode'>
                Postcode/ZIP <span class='required'>*</span>
              </label>
              <input type='text' id='zipCode' required />
            </div>

            <div class='form__control'>
              <label for='phone'>Phone (optional)</label>
              <input type='tel' id='phone' />
            </div>

            <div class='form__control'>
              <label for='email'>
                Email address <span class='required'>*</span>
              </label>
              <input type='email' id='email' required />
            </div>

            <section class='checkout__summary'>
              <h2>Your Order</h2>
              <div class='checkout__summary-container'>
                <div class='checkout__summary-row'>
                  <div>
                    <h3 class='checkout__summary-head'>Product</h3>
                    <h3 class='checkout__summary-head'>Subtotal</h3>
                  </div>
                  <div>
                    <div class='checkout__inCartItems-container'>
                      ${products()}
                    </div>
                    <h4>$${parseFloat(productTotal).toFixed(2)}</h4>
                  </div>
                  <div>
                    <h3>Shipping</h3>
                    <h4>$${sub__price}</h4>
                  </div>
                  <div>
                    <h3>Total</h3>
                    <h4>$${cartTotal}</h4>
                  </div>
                </div>
              </div>
            </section>
            <section class='payment__section'>
              <div class='payment__section-container'>
                <div class='payment__section-control'>
                  <input type='radio' id='cod' name='credit-card' class='transac__radio' checked />
                  <label for='cod' class='option__label'>
                    Cash on delivery <span class='custom__radio'></span>
                  </label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='credit-cards'
                    name='credit-card'
                    class='transac__input transac__radio'
                  />
                  <label for='credit-cards' class='option__label'>
                    Credit card <span class='custom__radio'></span>
                  </label>
                  <label class='transac__label'>
                    <div class='credit__card-container'>
                      <h4>
                        This section of the site forward isn't functional, as it is only a fun project. Cheers!
                      </h4>
                      <div class='transac__center'>
                        <div>
                          <label>
                            Card Number <span class='required'>*</span>
                          </label>
                          <input type='text' class='card__no-input' />
                        </div>
                        <div>
                          <div>
                            <label>
                              Expiry Date<span class='required'>*</span>
                            </label>
                            <input type='text' />
                          </div>

                          <div>
                            <label>
                              Card Code(CVC) <span class='required'>*</span>
                            </label>
                            <input type='text' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                <footer class='checkout__footer'>
                  <p>
                    Your personal data will be used to process your order and
                    support your experience through this website.
                  </p>
                  <div>
                    <button class='checkoutFooter__btn'>Place order</button>
                  </div>
                </footer>
              </div>
            </section>
          </form>
        </section>
        ${Footer.render()}
        `
  },
}

export default Checkout
