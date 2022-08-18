import styles from './styles/CardArtigos.module.scss'

type Props = {
  img: any;
  title: string;
  description: string;
  url: string;
}

export default function CardArtigos(props: Props) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.img} />
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
      <button className={styles.button}>
        <a href={props.url}>
          LER ARTIGOS
        </a>
      </button>
    </div>
  )
}
