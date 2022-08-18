import styles from './styles/MeuCahorro.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CardProducts from './CardPrododucts'
import Modal from './ModalProduct'

import productImag0 from '../images/products0.png'

//Lib do carrossel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//url da api dos produtos
const url = 'https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json'

type PropsModal = {
  img: any;
  name: string;
  price: number;
  description: string
}

export default function MeuCachorro() {
  const [products, setProducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dataModal, setDataModal] = useState({
    img: "",
    name: "",
    price: 0,
    description: ""
  })

  //Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  //function to get the products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const request = await axios.get(url)
        const data = request.data
        console.log('data', data.products)

        setProducts(data.products)
      }

      catch (err) {
        console.log(err)
        //alert(err.message)
      }
    }
    getProducts()
  }, [])

  //função para renderizar os cartoes dos produtos
  const getCardProducts = (items: any) => {

    if (items == []) return null
    return items.map((item: any) => (
      <CardProducts img={item.photo}
        price={item.price}
        btnFunc={handleModal}
        description={item.descriptionShort}
        name={item.productName}
      />
    ))
  }

  //função que abre o modal
  const handleModal = (data: PropsModal) => {
    setDataModal(data)
    setIsModalOpen(true)
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className="title">Meu cachorro...</h1>
        <div>
          <button className={styles.button}>É AGITADO</button>
          <button className={styles.button}>MORDE</button>
          <button className={styles.button}>LATE MUITO</button>
          <button className={styles.button}>É ANSIOSO</button>
          <button className={styles.button}>É ESTRESSADO</button>
        </div>
      </div>


      <Slider {...settings}>
        {/*
	    Durante o desenvolvimento desse site
	    os links das imagens retornados pela api estavam
	    sendo direcionados para uma pagina de error 404,
	    então criei esse componente para testar  funcionamento
	    do site
	  */}

        <CardProducts
          descount={40}
          img={productImag0}
          btnFunc={handleModal}
          description="Many desktop publishing packages and web page editors now Many"
          price={42000}
          name={"Brinquedo Kong Duratreat Ring 4"}
        />
        {
          getCardProducts(products)
        }

      </Slider>


      {
        //Logica para o invocar o modal
        isModalOpen && <Modal exit={() => setIsModalOpen(false)}
          img={dataModal.img}
          name={dataModal.name}
          price={dataModal.price}
          description={dataModal.description}
        />
      }
    </section >
  )
}
