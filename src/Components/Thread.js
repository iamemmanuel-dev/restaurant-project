let routes = []

const Thread = {
  after__render() {
    const route = document.location.hash.split('/')[1]
    routes = [...new Set([...routes, route])]
    routes.map(route =>
      document.getElementById(route).classList.add('style__active')
    )
  },
  render() {
    return `
      <div class='thread__container'>
        <div class='thread__row'>
            <hr/>
            <div class='threads'>
                <div id='cart'>1</div>
                <h4>Shopping cart</h4>
            </div>
            <div class='threads'>
                <div id='checkout'>2</div>
                <h4>checkout</h4>
            </div>
            <div class='threads'>
                <div id='orders'>3</div>
                <h4>orders</h4>
            </div>
        </div>
      </div>
    `
  },
}

export default Thread
