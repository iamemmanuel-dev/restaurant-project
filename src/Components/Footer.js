const Footer = {
  render() {
    return `
      <footer>
        <div class='footer__content container'>
          <div class='footer__row'>
            <div class='footer__col-1'>
              <h3>Our story</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis nihil repellendus, rem reprehenderits.
              </p>
              <div class="opening__info">
                <div>
                  <i class=''></i>
                  <p>Mon-Sat 8:00am - 11:00pm</p>
                </div>

                <div>
                  <i class=''></i>
                  <p>Sundays closed</p>
                </div>
              </div>
            </div>
            <div class='footer__col-2'>
              <h3>Quick links</h3>
              <ul>
                <li class='footer__list'>
                  <a class='footer__link' href='/'>Home</a>
                </li>
                <li class='footer__list'>
                  <a class='footer__link' href='/#/restaurant'>Restaurant</a>
                </li>
                <li class='footer__list'>
                  <a class='footer__link' href='/#/dishes'>Dishes</a>
                </li>
                <li class='footer__list'>
                  <a class='footer__link' href='/#/about'>About</a>
                </li>
                <li class='footer__list'>
                  <a class='footer__link' href='/#/place-order'>Place order</a>
                </li>
                <li class='footer__list'>
                  <a class='footer__link' href='/#/invoice'>Invoice</a>
                </li>
              </ul>
            </div>
            <div class='footer__col-3'>
              <h3>Locations</h3>
            </div>
          </div>
        </div>
      </footer>
    `
  },
}

export default Footer
