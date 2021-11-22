import { retrieve__cartItems } from '../Assets/Utils.js'
import Footer from '../Components/Footer.js'
import Nav from '../Components/Nav.js'
import Thread from '../Components/Thread.js'
const Order = {
  render() {
    const months = [
      'jan',
      'feb',
      'march',
      'april',
      'june',
      'july',
      'aug',
      'sept',
      'oct',
      'nov',
      'dec',
    ]
    const randomNumber = (num1, num2) =>
      Math.floor(Math.random() * (num2 - num1) + num1)
    const cartItems = retrieve__cartItems()
    const subTotal = cartItems.reduce((a, c) => a + c.price * c.amount, 0)

    const month = months[new Date().getMonth() - 1]
    const date = new Date().getDate()
    const year = new Date().getFullYear()

    return `
        ${Nav.render()}
        ${Thread.render()}
        <section class='order__section'>
          <div class="order__row">
            <div class="order__col1">
              <h2 class='order__col1-mainTitle'>Order details</h2>
              <ul>
                <li>
                  <h3>PRODUCT</h3>
                  <h3>TOTAL</h3>
                </li>
                ${cartItems
                  .map(items => {
                    const { title, amount, price } = items
                    return `<li>
                    <h3>${title} x ${amount}</h3>
                    <h4>$${price * amount}</h4>
                  </li>`
                  })
                  .join('')}
                  <li class='bolded__li'>
                    <h3>Subtotal</h3>
                    <h4>$${subTotal}</h4>
                  </li>

                  <li class='bolded__li'>
                    <h3>Shipping</h3>
                    <h4>Home delivery</h4>
                  </li>
                  <li class='bolded__li'>
                    <h3>Payment method</h3>
                    <h4>Cash on delivery</h4>
                  </li>
                  <li class='bolded__li'>
                    <h3>Total</h3>
                    <h4>$${subTotal}</h4>
                  </li>
              </ul>
            </div>
            <div class="order__col2">
                  <div class="order__col2-content">
                    <h3>Thank you. Your order has been received</h3>
                    <ul>
                      <li>Order number: <span>${randomNumber(
                        300,
                        500
                      )}</span></li>
                      <li>Date: <span>${month} ${date}, ${year}</span></li>
                      <li>Email: </li>
                      <li>Total: <span>$${subTotal}</span></li>
                      <li>Payment method: <span>Credit card</span> </li>
                    </ul>
                  </div>
            </div>
          </div>
        </section>
        ${Footer.render()}
        `
  },
}

export default Order
