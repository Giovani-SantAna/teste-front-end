import styles from './styles/Categorias.module.scss'
import CardCategory from './CardCategory'
import category1 from '../images/category 1.png'
import category2 from '../images/category 2.png'
import category3 from '../images/category 3.png'
import category4 from '../images/category 4.png'

export default function Categorias() {

  //Nada a se comentar nessa parte
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Categorias</h1>
      <div className={styles.containerCards}>
        <CardCategory img={category1} name="Brinquedos" />
        <CardCategory img={category2} name="Petiscos" />
        <CardCategory img={category3} name="Guias" />
        <CardCategory img={category4} name="Higiene" />
      </div>
    </section>
  )
}
