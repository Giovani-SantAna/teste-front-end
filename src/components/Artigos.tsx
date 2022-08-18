import styles from './styles/Artigos.module.scss'
import CardArtigos from './CardArtigos'
import img0 from '../images/article0.png'
import img1 from '../images/article1.png'
import img2 from '../images/article2.png'
import img3 from '../images/article3.png'

const titlePlaceholder = "Lorem ipsum dolor sit amet consectetur."
const descriptionPlaceholder = "Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae."
const urlPlaceholder = "#"

export default function Artigos() {
  return (
    <section className={styles.container}>
      <h1 className="title">
        Confira o nosso Blog
        <div className={styles.cards}>
          <CardArtigos img={img0}
            title={titlePlaceholder}
            description={descriptionPlaceholder}
            url={urlPlaceholder}
          />
          <CardArtigos img={img1}
            title={titlePlaceholder}
            description={descriptionPlaceholder}
            url={urlPlaceholder}
          />
          <CardArtigos img={img2}
            title={titlePlaceholder}
            description={descriptionPlaceholder}
            url={urlPlaceholder}
          />
          <CardArtigos img={img3}
            title={titlePlaceholder}
            description={descriptionPlaceholder}
            url={urlPlaceholder}
          />
        </div>
      </h1>
    </section>
  )
}
