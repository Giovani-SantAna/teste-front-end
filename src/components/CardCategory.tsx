import styles from './styles/CardCategory.module.scss'

type Props = {
  img: any;
  name: string
}
// superseded
export default function CardCategory(props: Props) {

  return (
    <div className={styles.container}>
      <a href="#">
        <img className={styles.img} src={props.img} />
        <p className={styles.p}>{props.name}</p>
      </a>
    </div>
  )
}
