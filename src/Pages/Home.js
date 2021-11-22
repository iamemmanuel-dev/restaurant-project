import AboutMini from '../Components/AboutMini.js'
import Footer from '../Components/Footer.js'
import Hero from '../Components/Hero.js'
import NewsLetter from '../Components/NewsLetter.js'
import Offers from '../Components/Offers.js'

const Home = {
  after__render() {
    return `${NewsLetter.after__render()}`
  },
  render() {
    return `
        ${Hero.render()}
        ${AboutMini.render()}
        ${Offers.render()}
        ${NewsLetter.render()}
        ${Footer.render()}
    `
  },
}

export default Home
