import {
  chineseMeal,
  desserts,
  englishMeal,
  nigerianMeal,
} from '../Assets/Utils.js'

const Offers = {
  render() {
    const NigerianMeal = nigerianMeal()
    const ChineseMeal = chineseMeal()
    const EnglishMeal = englishMeal()
    const Desserts = desserts()
    return `
      <section id='offers'>
        <div class='offers__cockpit'>
          <h2 class='offers__cockpit-title'>What we offer</h2>
        </div>
        <section class='offers__section'>
          <div>
            <div class='offers__mainTitle-1'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                porro itaque, atque iure reprehenderit distinctio incidunt! In
                beatae nisi a explicabo dolorum? Neque exercitationem, sed
                facere at pariatur distinctio perferendis.
              </p>
              <h3>
                <span>nigerian</span>
                <span class='style__main-1'>meals</span>
              </h3>
            </div>
            <div class='col-row'>
                ${NigerianMeal.map(
                  items => `<div class='offers__product-container'>
                    <img src= ${items.img} alt=${
                    items.title
                  } class='offers__img' />
                    <h3>${items.title}</h3>
                    <h4>$${parseFloat(items.price.toFixed(2))}</h4>
                </div>`
                )}
            </div>
            <div class='offers__btnContainer'>
                <a href="/#/restaurant" class='offers__btn'>order now!</a>
            </div>
          </div>

          <div class='u__margin-top'>
            <div class='offers__mainTitle-2'>
            <h3>
                <span>chinese</span> <span class='style__main-2'>meals</span>
             </h3>
              <p>
              Rem dolor reiciendis velit natus doloremque! Aliquid error consequatur explicabo aperiam nisi unde incidunt quos sit illo exercitationem dolor expedita eveniet.
              </p>
            </div>
            <div class='col-row'>
                ${ChineseMeal.map(
                  items => `<div class='offers__product-container'>
                    <img src= ${items.img} alt=${
                    items.title
                  } class='offers__img' />
                    <h3>${items.title}</h3>
                    <h4>$${parseFloat(items.price.toFixed(2))}</h4>
                </div>`
                )}
            </div>
            <div class='offers__btnContainer'>
                <a href="/#/restaurant" class='offers__btn'>order now!</a>
            </div>
          </div>

          <div class='u__margin-top'>
            <div class='offers__mainTitle-1'>
              <p>
                Odit autem obcaecati dolores iure sed officiis, excepturi aut dolorem, repellat facilis corrupti eos. Dolorem porro, maiores nihil eius hic temporibus soluta.
              </p>
              <h3>
                <span>English</span>
                <span class='style__main-1'>meals</span>
              </h3>
            </div>
            <div class='col-row'>
                ${EnglishMeal.map(
                  items => `<div class='offers__product-container'>
                    <img src= ${items.img} alt=${
                    items.title
                  } class='offers__img' />
                    <h3>${items.title}</h3>
                    <h4>$${parseFloat(items.price.toFixed(2))}</h4>
                </div>`
                )}
            </div>
            <div class='offers__btnContainer'>
                <a href="/#/restaurant" class='offers__btn'>order now!</a>
            </div>
          </div>

          <div class='u__margin-top'>
          <div class='offers__mainTitle-2'>
          <h3>
              <span>Desserts and</span> <span class='style__main-2'>hams</span>
           </h3>
            <p class='styled__para'>
                Sequi culpa repudiandae laborum optio odio dicta quibusdam? Similique rem obcaecati, non soluta quibusdam quo vel ipsa maxime doloribus culpa voluptatum.
            </p>
          </div>
          <div class='col-row'>
              ${Desserts.map(
                items => `<div class='offers__product-container'>
                  <img src= ${items.img} alt=${
                  items.title
                } class='offers__img' />
                  <h3>${items.title}</h3>
                  <h4>$${parseFloat(items.price.toFixed(2))}</h4>
              </div>`
              )}
          </div>
          <div class='offers__btnContainer'>
              <a href="/#/restaurant" class='offers__btn'>order now!</a>
          </div>
        </div>
        </section>
      </section>
    `
  },
}

export default Offers
