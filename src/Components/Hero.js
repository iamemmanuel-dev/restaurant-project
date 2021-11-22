import Nav from './Nav.js'

const Hero = {
  render() {
    return `
      <header id='Home__header'>
        ${Nav.render()}
        <div class='header__content'>
          <h1 class='main__heading'>
           <span class='main__heading__greet'>Welcome to</span> <br/>
           le manoir restauranto
          </h1>
          <p class='sub__heading'>
            We serve only the best delicacies
          </p>
          <a href="/#/restaurant">
            <button class='hero__btn'>
              explore
            </button>
          </a>
        </div>
      </header>
    `
  },
}

export default Hero
