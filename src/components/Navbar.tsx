import {
  TbTruckDelivery,
  TbCreditCard,
  TbShieldCheck,
  TbSearch,
  TbCrown,
  TbHeart,
} from 'react-icons/tb'
import { IoPersonCircleOutline, IoCartOutline } from 'react-icons/io5'
import { VscPackage } from 'react-icons/vsc'
import styles from './styles/Navbar.module.scss'


import logo from '../images/logo.png'

export default function Navbar() {

  //A navbar foi separada em 3 partes
  return (
    <nav className={styles.nav}>
      {/*
	  1- Top section
	  Avisos, como frete gratis, parcelamentos etc
	*/}
      <div className={styles.topNav}>
        <div className={styles.tobNavSections}>
          <TbShieldCheck />
          Compra <span className={styles.destaque}> 100% segura</span>
        </div>
        <div className={styles.tobNavSections}>
          <TbTruckDelivery /> <span className={styles.destaque}>Frete gratís</span> acima de R$ 200
        </div>
        <div className={styles.tobNavSections}>
          <TbCreditCard />
          <span className={styles.destaque}>Parcele</span> suas compras
        </div>
      </div>

      {/*
	  2- Mid section
	  aqui é a parte funcional da navbar contendo
	  a barra de busca, acesso ao login, carinho ,etc
	*/}
      <div className={styles.midNav}>
        {/*Logo*/}
        <div><img width="178" src={logo} /></div>
        {/*Search bar*/}
        <div className={styles.searchBar}>
          <input className={styles.input} placeholder="O que você está buscando?" />
          <button className={styles.button}>
            <TbSearch />
          </button>
        </div>
        {/*
	  */}
        <div className={styles.utilities}>
          <a href="#">
            <VscPackage />
          </a>
          <a href="#">
            <TbHeart />
          </a>
          <a href="#">
            <IoPersonCircleOutline />
          </a>
          <a href="#">
            <IoCartOutline />
          </a>
        </div>
      </div>

      {/*
	  3-Bottom
	  acesso rapido as secoes do site
	  */}
      <div className={styles.bottomNav}>
        <a href="#">Brincar</a>
        <a href="#">Morder</a>
        <a href="#">Comer</a>
        <a href="#">Passear</a>
        <a href="#">Casa e Conforto</a>
        <a href="#">Educação</a>
        <a href="#" className={styles.destaque}>Ofertas</a>
        <a href="#"> <TbCrown /> Coleção de outono</a>

      </div>
    </nav>
  )
}
