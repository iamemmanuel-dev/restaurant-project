const NewsLetter = {
  after__render() {
    const form = document.querySelector('.newsletter__form')
    const input = document.querySelector('.newsletter__input')
    const alert = document.querySelector('.newsletter__alert')
    const btn = document.querySelector('.newsletter__btn')

    form.addEventListener('submit', e => {
      e.preventDefault()
      const value = input.value
      if (value) {
        setTimeout(() => {
          alert.style.display = 'block'
        }, 1000)

        setTimeout(() => {
          input.value = ''
          btn.textContent = 'SUBSCRIBED'
          btn.disabled = true
        }, 1001)
      }
    })
  },
  render() {
    return `
      <div class='newsLetter-section'>
        <div class='newsLetter__container'>
          <h2>NEWSLETTER</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aliquid dolorum explicabo ducimus vel nihil, quas ratione modi rerum
            harum.
          </p>
          <form class='newsletter__form'>
            <h3>email address</h3>
            <input type='email' class='newsletter__input' required />
            <button type='submit' class='newsletter__btn'>subscribe</button>
            <p class='newsletter__alert'>Thank you for subscribing</p>
          </form>
        </div>
      </div>
    `
  },
}

export default NewsLetter
