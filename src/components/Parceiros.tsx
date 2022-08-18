import styles from './styles/Parceiros.module.scss'
import dogCard from '../images/dogCard.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Parceiros() {

  return (
    <section className={styles.section}>

      <div className={styles.card1}>

        <div className={styles.container}>
          <h2 className={styles.title}>Parceiros</h2>
          <p className={styles.p}>
            Lorem ipsum dolor sit<br />
            amet, consectetur
          </p>
          <button className={styles.button}>
            <a>
              CONFIRA
            </a>
          </button>
        </div>
      </div>
      <div className={styles.card2}>

        <div className={styles.container}>
          <h2 className={styles.title2}>Assinatura <br /> Cãoselheiro</h2>
          <p className={styles.p2}>
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit. Auctor<br />
            adipiscing quis non sed.
          </p>
          <button className={styles.button}>
            <a>
              SAIBA MAIS
            </a>
          </button>
        </div>
        <img src={dogCard} />
      </div>
    </section>
  )
}
