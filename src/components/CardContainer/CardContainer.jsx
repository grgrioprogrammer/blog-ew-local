import React from 'react'
import styles from './CardContainer.module.css'
import { FiArrowRightCircle } from "react-icons/fi"; 

export const CardContainer = () => {

  const data = [
    {title: 'Building Web Layouts For Dual-Screen Devices', img:'https://img.freepik.com/fotos-premium/hombre-gafas-vr-jugando-videojuegos-realidad-virtual-explorando-metaverso-adolescente-pie-casco-ar-disfrutando-experiencia-simulacion-entretenimiento-ciberespacio-estilo-vida-moderno_482257-49502.jpg', subtitle: 'Lorem ipsum dolor sasd as dit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.', date: 'March 12, 2022',},
    {title: 'Building Web Layouts For Dual-Screen Devices', img:'https://img.freepik.com/fotos-premium/hombre-gafas-vr-jugando-videojuegos-realidad-virtual-explorando-metaverso-adolescente-pie-casco-ar-disfrutando-experiencia-simulacion-entretenimiento-ciberespacio-estilo-vida-moderno_482257-49502.jpg', subtitle: 'Lorem ipsum dolor sasd as dit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.', date: 'March 12, 2022',},
    {title: 'Building Web Layouts For Dual-Screen Devices', img:'https://img.freepik.com/fotos-premium/hombre-gafas-vr-jugando-videojuegos-realidad-virtual-explorando-metaverso-adolescente-pie-casco-ar-disfrutando-experiencia-simulacion-entretenimiento-ciberespacio-estilo-vida-moderno_482257-49502.jpg', subtitle: 'Lorem ipsum dolor sasd as dit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.', date: 'March 12, 2022',},
  ]

  return (
    <div className={styles.main_card_container}>
        <div className={styles.card}>
          <div className={styles.img_div_container}>
            <img src={data[0].img} alt="" />
          </div>
          <div className={styles.data_div_container}>
            <div className={styles.h1_div_container}>
              <h1>{data[0].title}</h1>
            </div>
            <p className={styles.date_p}>{data[0].date}</p>
            <p className={styles.text_p}>{data[0].subtitle}</p>
            <div className={styles.div_button}>
              <button>Read More <FiArrowRightCircle className={styles.arrow}/></button>
            </div>
          </div>
        </div>


        <div className={styles.card}>
          <div className={styles.img_div_container}>
            <img src={data[1].img} alt="" />
          </div>
          <div className={styles.data_div_container}>
            <div className={styles.h1_div_container}>
              <h1>{data[1].title}</h1>
            </div>
            <p className={styles.date_p}>{data[1].date}</p>
            <p className={styles.text_p}>{data[1].subtitle}</p>
            <div className={styles.div_button}>
              <button>Read More <FiArrowRightCircle className={styles.arrow}/></button>
            </div>
          </div>
        </div>


        <div className={styles.card}>
          <div className={styles.img_div_container}>
            <img src={data[2].img} alt="" />
          </div>
          <div className={styles.data_div_container}>
            <div className={styles.h1_div_container}>
              <h1>{data[2].title}</h1>
            </div>
            <p className={styles.date_p}>{data[2].date}</p>
            <p className={styles.text_p}>{data[2].subtitle}</p>
            <div className={styles.div_button}>
              <button>Read More <FiArrowRightCircle className={styles.arrow}/></button>
            </div>
          </div>
        </div>
    </div>
  )
}
