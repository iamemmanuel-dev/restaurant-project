import { re__render } from '../Assets/Utils.js'
import Footer from '../Components/Footer.js'
import Nav from '../Components/Nav.js'
import NewsLetter from '../Components/NewsLetter.js'

let count = 0

const About = {
  after__render() {
    const reviews = document.querySelectorAll('.reviews__center')
    const prevBtn = document.querySelector('.prevBtn')
    const nextBtn = document.querySelector('.nextBtn')
    const dot = document.getElementById(`${count}`)
    const dots = document.querySelectorAll('.review__dot')

    dot.style.backgroundColor = 'goldenrod'

    const goToSlide = count => {
      reviews.forEach(
        (slides, i) =>
          (slides.style.transform = `translateX(${100 * (i - count)}%)`)
      )
    }

    goToSlide(count)

    reviews.forEach(
      revs =>
        revs.style.transform === 'translateX(0%)' &&
        revs.classList.add('active__review')
    )

    nextBtn.addEventListener('click', () => {
      count++
      if (count > 2) {
        count = 0
      }
      re__render(this)
    })

    prevBtn.addEventListener('click', () => {
      count--
      if (count < 0) {
        count = reviews.length - 1
      }
      re__render(this)
    })

    dots.forEach(dot => {
      const { id } = dot.dataset
      dot.addEventListener('click', () => {
        count = +id
        re__render(this)
      })
    })
  },
  render() {
    return `
        <header id='About__hero'>
        ${Nav.render()}
          <div class='aboutHeroContent'>
            <h1>About Us</h1>
          </div>
        </header>
        <section class='about__section'>
          <div class='about__row about__container'>
            <div class='about__col-1'>
              <h2>
                <span class='about__col1-main'>Welcome!</span>
                <div class='about__col1-style'>
                  <sup>to</sup>
                  <span>le manoir</span>
                </div>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis maxime non debitis et tempore repellendus ipsum,
                numquam dolorem accusamus.
              </p>
            </div>
            <div class='about__col-2'>
              <div class='about__col2__img-container about__col2__img-container1'>
                <img src="'../../src/Assets/images/team3.jpg" alt='image' />
              </div>

              <div class='about__col2__img-container about__col2__img-container2'>
                <img src='../../src/Assets/images/team5.jpg' alt='image' />
              </div>

              <div class='about__col2__img-container about__col2__img-container3'>
                <img
                  src='../../src/Assets/images/restaurant3.jpg'
                  alt='image'
                />
              </div>
            </div>
          </div>
        </section>
        <section class='story__section'>
          <div class='story__row'>
            <div class='story__col1'>
              <div class='story__content'>
                <h2 class='story__title'>our story</h2>
                <h4>We aim to inspire</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quisquam, dicta qui consectetur harum optio aliquam
                  quia impedit tenetur, odit assumenda, dolores ducimus laborum.
                </p>
              </div>
            </div>
            <div class='story__col2'></div>
          </div>
        </section>
        <section class='reviews__section'>
          <div class='container'>
            <h2 class='reviews__mainTitle'>
            What customers say <br /> about us!
          </h2>
          </div>
          <div class='reviews__row container'>
            <div class='review__img__container'>
              <img src='../../src/Assets/images/clearChef2.jpg' alt='' />
            </div>
            <div class='reviews__container'>
              <div class='reviews__content'>
                <div class='reviews__col-1'>
                  <h3>
                    They <br />
                    Trusted Us
                  </h3>
                  <p>We are very happy because we have happy customers</p>
                </div>
                <div class='reviews__parent'>
                  <div class='reviews__center reviews__center1'>
                    <div class='reviews__imgContainer'>
                      <img
                        src='../../src/Assets/images/commenters1.jfif'
                        alt='review image'
                        class='review__image'
                      />
                    </div>
                    <div class='reviews__main'>
                      <h3>Robin sally</h3>
                      <blockquote>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Est, similique ut esse cupiditate, adipisci atque,
                        explicabo ex ipsam optio autem sapiente voluptas rem
                        eligendi voluptatem error temporibus? Laudantium, quia
                        perferendis.
                      </blockquote>
                      <div class='reviews__footer'>
                        <h4>3 days ago</h4>
                        <div class='reviews__rating'>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                        </div>
                      </div>
                    </div>
                    <div class='comment__icon'>
                      <i class='far fa-comment'></i>
                    </div>
                  </div>

                  <div class='reviews__center reviews__center2'>
                    <div class='reviews__imgContainer'>
                      <img
                        src='../../src/Assets/images/commenters2.jfif'
                        alt='review image'
                        class='review__image'
                      />
                    </div>
                    <div class='reviews__main'>
                      <h3>Susan smith</h3>
                      <blockquote>
                        Voluptatum asperiores illum ratione ipsam, aut dolorem
                        reiciendis ducimus impedit voluptatibus consectetur
                        similique. Voluptas vel voluptate minus autem rerum
                        ullam.
                      </blockquote>
                      <div class='reviews__footer'>
                        <h4>6 days ago</h4>
                        <div class='reviews__rating'>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                        </div>
                      </div>
                    </div>
                    <div class='comment__icon'>
                      <i class='far fa-comment'></i>
                    </div>
                  </div>

                  <div class='reviews__center reviews__center3'>
                    <div class='reviews__imgContainer'>
                      <img
                        src='../../src/Assets/images/commenters3.jfif'
                        alt='review image'
                        class='review__image'
                      />
                    </div>
                    <div class='reviews__main'>
                      <h3>Andrew Peters</h3>
                      <blockquote>
                        Eveniet iste a repellat cum eius sapiente cupiditate
                        nobis possimus aliquid maiores corporis culpa ipsam
                        laborum officia. Mollitia, voluptates impedit.
                      </blockquote>
                      <div class='reviews__footer'>
                        <h4>7 days ago</h4>
                        <div class='reviews__rating'>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                          <i class='fas fa-star'></i>
                        </div>
                      </div>
                    </div>
                    <div class='comment__icon'>
                      <i class='far fa-comment'></i>
                    </div>
                  </div>
                </div>
                <div class='reviews__btnContainer'>
                  <button class='reviews__navigBtn prevBtn'>&larr;</button>
                  <div class='reviews__dots-container'>
                    <div class='review__dot' id='0' data-id='0'></div>
                    <div class='review__dot' id='1' data-id='1'></div>
                    <div class='review__dot' id='2' data-id='2'></div>
                  </div>
                  <button class='reviews__navigBtn nextBtn'>&rarr;</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        ${NewsLetter.render()}
        ${Footer.render()}
        `
  },
}

export default About
