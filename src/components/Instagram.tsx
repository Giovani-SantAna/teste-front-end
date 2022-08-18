import styles from './styles/Instagram.module.scss'
import img1 from '../images/insta1.png'
import img2 from '../images/insta2.png'
import img3 from '../images/insta3.png'

export default function Instagram() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={"title"}>Instagram</h1>
        <a className={styles.todos}>+Seguir</a>
      </div>
      <div className={styles.containerImages}>
        <img className={styles.img} src={img1} alt="an imagee of a dog" />
        <img className={styles.img} src={img2} alt="an imagee of a dog" />
        <img className={styles.img} src={img3} alt="an imagee of a dog" />
        <img className={styles.img} src={img1} alt="an imagee of a dog" />
        <img className={styles.img} src={img2} alt="an imagee of a dog" />
        <img className={styles.img} src={img3} alt="an imagee of a dog" />
      </div>
    </section>
  )
}
