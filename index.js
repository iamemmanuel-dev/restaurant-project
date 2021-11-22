const app = document.querySelector('#app')
const scrollBtn = document.querySelector('.scrollBtn')
import parseRequestUrl from './src/Assets/Routing.js'
import About from './src/Pages/About.js'
import Home from './src/Pages/Home.js'
import Restaurant from './src/Pages/Restaurant.js'
import data from './src/Assets/Data/data.js'
import Cart from './src/Pages/Cart.js'
import Checkout from './src/Pages/Checkout.js'
import { save__data__locally } from './src/Assets/Utils.js'
import Order from './src/Pages/Order.js'

const routes = {
  '/': Home,
  '/about': About,
  '/restaurant': Restaurant,
  '/cart': Cart,
  '/checkout': Checkout,
  '/order': Order,
}

const routing = () => {
  save__data__locally(data)
  const { resource } = parseRequestUrl()
  const parsedRoute = `${resource ? `/${resource}` : '/'}`
  const route = routes[parsedRoute]
  app.innerHTML = route.render()

  if (route.after__render) {
    route.after__render()
  }
}

const handleScroll = () => {
  const viewHeight = window.pageYOffset
  if (viewHeight > 900) {
    scrollBtn.classList.add('showScrollBtn')
  } else {
    scrollBtn.classList.remove('showScrollBtn')
  }
}

scrollBtn.addEventListener('click', () => {
  const nav = document.querySelector('nav')
  nav.scrollIntoView({ behavior: 'smooth' })
})

window.addEventListener('load', routing)
window.addEventListener('hashchange', routing)
window.addEventListener('scroll', handleScroll)
