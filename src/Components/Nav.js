import { retrieve__cartItems } from '../Assets/Utils.js'

const Nav = {
  render() {
    return `
      <nav>
        <div class='nav__center'>
          <div class='nav__header'>
            <ul class='nav__lists'>
              <li class='nav__items'>
                <a href='/#/' class='nav__links'>
                  Home
                </a>
              </li>
              <li class='nav__items'>
                <a href='/#/restaurant' class='nav__links'>
                  Restaurant
                </a>
              </li>
              <li class='nav__items'>
                <a href='/#/about' class='nav__links'>
                  About
                </a>
              </li>
            </ul>
            <a href="/#/"><div class='logo__container'><img src='../src/Assets/images/logo.jfif' alt='logo' class='logo' /></div></a>
            <ul class='nav__lists'> 
              <li class='nav__items'>
                <a href='/#/order' class='nav__links'>
                  order info
                </a>
              </li>
  
              <li class='nav__items'>
                <a href='/#/cart' class='nav__links'>
                  cart
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="/#/cart">
          <div class='cart__container'>
            <i class='fas fa-shopping-cart'></i>
            <span class='amount'>${retrieve__cartItems().length}</span>
          </div>
        </a>
      </nav>
    `
  },
}

export default Nav
