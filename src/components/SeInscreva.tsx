import styles from './styles/SeInscreva.module.scss'
import imgDog from '../images/dog.png'
import { IoPersonOutline } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'

export default function SeInscreva() {
  return (
    <section className={styles.section}>
      <img src={imgDog} />
      <div className={styles.container}>
        <p className={styles.p}>
          Se inscreva para receber
          <br />
          novidades e promoções
        </p>

        <div className={styles.containerInput}>
          <IoPersonOutline className={styles.icons} />
          <input className={styles.input} placeholder="Digite seu nome" />
        </div>

        <div className={styles.containerInput}>
          <MdOutlineEmail className={styles.icons} />
          <input className={styles.input} placeholder="Digite seu e-mail" />
        </div>

        <button className={styles.button}>
          <a>
            ENVIAR
          </a>
        </button>
      </div>
    </section >
  )
}
