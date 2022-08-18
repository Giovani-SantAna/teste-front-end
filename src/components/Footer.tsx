import styles from './styles/Footer.module.scss'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'

import econverseImg from '../images/econverse.png'
import cartoesImg from '../images/payment-methods.png'
import safeImg from '../images/safe.png'

export default function Hero() {
  return (
    <footer className={styles.footer}>
      <div className={styles.nosSiga}>
        <h2>Nos siga nas nossas <br /> redes sociais</h2>
        <div className={styles.containerIconsMidias}>
          <FaFacebookF className={styles.icons} />
          <FaInstagram className={styles.icons} />
          <FaYoutube className={styles.icons} />
        </div>
        <h2>Sobre O Cãoselheiro</h2>
        <p>Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir para uma melhor qualidade de vida dos cães e seus familiares humanos. Seus sócios são profissionais de educação canina que trabalham seguindo metodologias positivas de treinamento animal, encorajando e recompensando os acertos de nossos amigos em seus processos de adestramento. Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!</p>
      </div>

      <div className={styles.institucional}>
        <div className={styles.grid}>
          <div className={styles.title0}>ASSINATURA</div>
          <div className={styles.title0}>INSTITUCIONAL</div>
          <div className={styles.title0}>ATENDIMENTO</div>
          <div className={styles.title0}>PARCEIROS</div>

          <div className={styles.list0}>
            <ul className={styles.ul}>
              <li>Quem somos</li>
              <li>Política de privacidade</li>
              <li>Política comercial</li>
              <li>Política de devolução</li>
              <li>Regras de frete</li>
            </ul>
          </div>

          <div className={styles.list0}>
            <ul className={styles.ul}>
              <li>Fale conosco</li>
              <li> <FiPhone /> (11) 97212-1314 </li>
              <li>ocaoselheiro@ocaoselheiro.com.br</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
        </div>
        <div className={styles.grid2}>

          <div className={styles.title0}>Formas de pagamento</div>
          <div className={styles.title0}>Segurança</div>
          <div className={styles.img}>
            <img src={cartoesImg} />
          </div>
          <div className={styles.img}>
            <img src={safeImg} />
          </div>
        </div>
        {/*
          <div className={styles.title4}>Formas de pagamento</div>
          <div className={styles.title3}>Segurança</div>
          <div className={styles.img0}>PARCEIROS</div>
          <div className={styles.img1}>PARCEIROS</div>
          <div className={[styles.gridItem, styles.gridItem1].join(' ')}>c</div>
	  */}

        <div className={styles.cnpj}>
          <p className={styles.oCao}>
            O Cãoselheiro Comércio LTDA<br />
            CNPJ: 30.324.633/0001-16<br />
            © Todos os direitos reservados. 2021
          </p>
          <img width="226" height="32" src={econverseImg} />
        </div>
      </div>
    </footer>
  )
}
