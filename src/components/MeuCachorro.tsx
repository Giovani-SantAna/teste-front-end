import styles from './styles/MeuCahorro.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CardProducts from './CardPrododucts'

import productImag0 from '../images/products0.png'
import productImag1 from '../images/products1.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const url = 'https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json'


export default function MeuCachorro() {
  const [products, setProducts] = useState([])
  //  const [isLoading, setLoading] = useState(true)


  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };


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


  const getCardProducts = () => {
    if (products == []) return null
    return products.map(product => (
      <CardProducts img={product.photo}
        price={product.price}
        name={product.productName}
      />
    ))
  }


  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className="title">Meu cachorro...</h1>
        <a className={styles.todos}>+Seguir</a>
      </div>


      {
        /*
    <div className={styles.containerProducts}>
      <CardProducts
        descount={40}
        img={productImag0}
        price={42000}
        name={"Brinquedo Kong Duratreat Ring 4"}
      />
      <CardProducts
        descount={40}
        img={productImag0}
        price={42000}
        name={"Brinquedo Kong Duratreat Ring 4"}
      />
      <CardProducts
        descount={40}
        img={productImag0}
        price={42000}
        name={"Brinquedo Kong Duratreat Ring 4"}
      />
        products.map(product => (
          <CardProducts
      img={product.photo}
            img={productImag0}
            price={product.price || ""}
            name={product.productName || ""}
          />
        ))
    </div>
        */
      }
      <Slider {...settings}>
        <CardProducts
          descount={40}
          img={productImag0}
          price={42000}
          name={"Brinquedo Kong Duratreat Ring 4"}
        />
        <CardProducts
          descount={40}
          img={productImag0}
          price={42000}
          name={"Brinquedo Kong Duratreat Ring 4"}
        />
        <CardProducts
          descount={40}
          img={productImag0}
          price={42000}
          name={"Brinquedo Kong Duratreat Ring 4"}
        />
        <CardProducts
          descount={40}
          img={productImag0}
          price={42000}
          name={"Brinquedo Kong Duratreat Ring 4"}
        />
        <CardProducts
          descount={40}
          img={productImag0}
          price={42000}
          name={"Brinquedo Kong Duratreat Ring 4"}
        />
        {
          getCardProducts()
        }

      </Slider>
    </section >
  )
}
