import {
  retrieve__localData,
  allCategories,
  findClickedProduct,
  addProductToCart,
  retrieve__cartItems,
  save__data__locally,
  re__render,
} from '../Assets/Utils.js'
import Footer from '../Components/Footer.js'
import Nav from '../Components/Nav.js'
import NewsLetter from '../Components/NewsLetter.js'

const Restaurant = {
  after__render() {
    const restaurant__row = document.querySelector('.productsDOM')
    const category__btn = document.querySelectorAll('.category__btn')
    const getProducts = data => {
      let response = ''
      data
        .map(items => {
          const { id, img, price, title, extras, inCart } = items
          response += `
          <article class="card_parent" data-id=${title}>
            <div class="card front__card">
              <div class="like__icon-container">
                <i class="fas fa Reg-Heart like__icon"></i>
              </div>
              <div class="front__card-img-container">
                <img src=${img} alt="dish img" />
              </div>
              <ul>
                <li>${title || 'Undefined'}</li>
                ${extras.map(lists => `<li>${lists}</li>`).join('')}
              </ul>
            </div>
            <div class="card back__card">
              <div class="back__card-content">
                <h4>At</h4>
                <h3>$${price}</h3>
                <button class="restaurant__btn addToCartBtn" data-id=${id}>${
            inCart ? 'In Cart' : 'Add To Cart'
          }</span></button>
              </div>
            </div>
          </article>`
        })
        .join('')

      restaurant__row.innerHTML = response
    }

    getProducts(retrieve__localData())

    category__btn.forEach(btn => {
      btn.addEventListener('click', ({ currentTarget }) => {
        const cate = currentTarget.dataset.id
        const filtered = retrieve__localData().filter(
          items => items.category === cate
        )

        if (cate === 'All') {
          getProducts(retrieve__localData())
          handleAddToCart()
        } else {
          getProducts(filtered)
          handleAddToCart()
        }
      })
    })

    const handleAddToCart = () => {
      const addToCartBtn = [...document.querySelectorAll('.addToCartBtn')]
      addToCartBtn.forEach(btn => {
        const { id } = btn.dataset
        retrieve__cartItems().find(
          items =>
            items.id === +id &&
            ((btn.textContent = 'In Cart'), (btn.disabled = true))
        )
        btn.addEventListener('click', () => {
          const clickedProduct = findClickedProduct(id)
          const upDatedData = retrieve__localData().map(items =>
            items.id === +id ? { ...items, inCart: true } : items
          )
          addProductToCart(clickedProduct)
          save__data__locally(upDatedData)
          re__render(this)
        })
      })
    }

    handleAddToCart()

    return `${NewsLetter.after__render()}`
  },
  render() {
    return `
      <header id='restaurant__header'>
      ${Nav.render()}
        <div class='restaurant__headerContent'>
          <h1>
            <span>We boast of </span>
            <span> an unquestionable taste</span>
            <span>And</span>
            <span>of uncompromising quality</span>
          </h1>
        </div>
      </header>
      <section class='restaurant__center'>
        <div>
          <h2>Dishes</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dignissimos eos nisi reiciendis!</p>
        </div>
          <div class="restaurant__btnContainer">
            ${allCategories
              .map(
                items =>
                  `<button class='category__btn' data-id=${items} >${items}</button>`
              )
              .join('')}
          </div>
          <div class="restaurant__products">
            <div class="productsDOM"></div>
          </div>
      </section>
      ${NewsLetter.render()}
      ${Footer.render()}
    `
  },
}

export default Restaurant
