import styles from './styles/Hero.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Hero() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <header>

      <Slider {...settings}>
        <Banner />
        <Banner />
        <Banner />
      </Slider>
    </header >
  )
}
/*

      <Banner />
 */

const Banner = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.p}>
          As melhores guias <br />
          para os melhores <br />
          passeios.
        </p>
        <button className={styles.button}>
          <a>
            CONFIRA
          </a>
        </button>
      </div>
    </div>
  )

}

/*
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    <header >
      <Slider {...settings}>
        <div>
          <h1>1</h1>
        </div>
        <div>
          <h1>2</h1>
        </div>
        <div>
          <h1>3</h1>
        </div>
      </Slider>
    </header>
 */
