import { useState } from 'react'

import {
  TbHeart,
} from 'react-icons/tb'
import styles from './styles/CardProducts.module.scss'

type Props = {
  img: string;
  name: string;
  price: number;
  description: string;
  btnFunc: any;
  priceSignature?: number;
  descount?: number;

}

export default function CardProducts(props: Props) {

  console.log("Price", (props.price / 100))
  return (
    <div className={styles.containerCard}>
      <div className={styles.topCard}>
        {
          //se houver um desconto o card ira mostar no canto superior
          //direito sua aquantidade
          props.descount ?
            <p className={styles.descount}>{props.descount}% OFF </p>
            :
            <div></div>
        }
        <TbHeart style={{ fontSize: 32, color: "#9F9F9F" }} />
      </div>
      <img
        className={styles.img}
        src={props.img} />
      <p className={styles.name}>
        {props.name}
      </p>
      <p className={styles.price}>
        por R$ <span>{(props.price / 100).toFixed(2)}</span>
      </p>
      {/*
	  Esse botão ira abrir o modal assim como configurar
	  oque sera mostrado
	*/}
      <button onClick={() => props.btnFunc({
        name: props.name,
        price: props.price,
        description: props.description,
        img: props.img
      })} className={styles.button}>
        ADICIONAR
      </button>
    </div >
  )
}
