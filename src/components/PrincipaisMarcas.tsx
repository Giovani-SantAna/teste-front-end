import styles from './styles/PrincipaisMarcas.module.scss'
import marcaImg0 from '../images/marca0.png'
import marcaImg1 from '../images/marca1.png'
import marcaImg2 from '../images/marca2.png'

export default function PrincipaisMarcas() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className="title">Principais marcas</h1>
        <a className={styles.todos}>Ver todos</a>
      </div>
      <div className={styles.containerMarcas}>

        <CardMarca url="#">
          <img src={marcaImg0} />
        </CardMarca>

        <CardMarca url="#">
          <img src={marcaImg1} />
        </CardMarca>

        <CardMarca url="#">
          <img src={marcaImg2} />
        </CardMarca>


        <CardMarca url="#">
          <img src={marcaImg0} />
        </CardMarca>

        <CardMarca url="#">
          <img src={marcaImg1} />
        </CardMarca>
      </div>
    </section>
  )
}

//There no much need to create a whole file just for this
const CardMarca = (props: any) => {

  return (
    <div className={styles.cardMarca}>
      <a href={props.url}>
        {props.children}
      </a>
    </div>
  )
}
