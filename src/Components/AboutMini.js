const AboutMini = {
  render() {
    return `
      <section id='aboutMini'>
        <div class='aboutMiniContainer'>
          <div class='aboutMini__col-1'>
            <div class='container aboutMini__col_1-content'>
              <h2>What we do</h2>
              <div class='aboutMini__col-1-div'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto veritatis consequatur dicta voluptate doloribus. Placeat illo illum cupiditate! Nulla natus labore nobis esse id adipisicing elit. Quod iusto veritatis. <a href='/#/about'>Read more...</a>  
                </p>
              </div>
            </div>
          </div>
          <div class='aboutMini__col-2'>
            <div class='container aboutMini__col_2-content'>
              <div class='aboutMini__img-container aboutMini__img-container1'>
                <img
                  src='../src/Assets/images/team.jpg'
                  alt='image'
                  class='aboutMini__img'
                />
              </div>

              <div class='aboutMini__img-container aboutMini__img-container2'>
                <img
                  src='../src/Assets/images/dish7.jpg'
                  alt='image'
                  class='aboutMini__img'
                />
              </div>


              <div class='aboutMini__img-container aboutMini__img-container3'>
                <img
                  src='../src/Assets/images/restaurant1.jpg'
                  alt='image'
                  class='aboutMini__img'
                />
              </div>
            </div>
            <h3 class='aboutMini__col-2-title'>Le manoir</h3>
          </div>
        </div>
      </section>
    `
  },
}

export default AboutMini
