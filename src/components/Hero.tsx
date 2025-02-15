import styles from './styles/Hero.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Hero() {
  //configuração do carrossel
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
        {/*
	    Como no projeto do figma não era possivel
	    ver quais eram as outras secoes decidi usar o banner
	    mais de uma vez para testar o funcinamento do slide
	  */}
        <Banner />
        <Banner />
        <Banner />
      </Slider>
    </header >
  )
}

//O banner foi separado em seu proprio componente
//para melhor manutenção do codigo
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
