import React from 'react'
import styles from './PDPPost.module.css'
import { BsFillPenFill } from "react-icons/bs";

const data = [
    {title: 'Building Web Layouts For Dual-Screen Devices', text: 'Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry give us a bell, don’t get shirty with me daft codswallop geeza up the duff zonked I tinkety tonk old fruit bog-standard spiffing good time Richard. Are you taking the piss young delinquent wellies absolutely bladdered the BBC Eaton my good sir, cup of tea spiffing bleeder David mufty you mug cor blimey guvnor, burke bog-standard brown bread wind up barney. Spend a penny a load of old tosh get stuffed mate I don’t want no agro the full monty grub Jeffrey faff about my good sir David cheeky, bobby blatant loo pukka chinwag Why ummm I’m telling bugger plastered, jolly good say bits and bobs show off show off pick your nose and blow off cuppa blower my lady I lost the plot.',img:'https://img.freepik.com/fotos-premium/hombre-gafas-vr-jugando-videojuegos-realidad-virtual-explorando-metaverso-adolescente-pie-casco-ar-disfrutando-experiencia-simulacion-entretenimiento-ciberespacio-estilo-vida-moderno_482257-49502.jpg', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.', date: 'March 12, 2022', authorQuote: "Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don’t get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load of old tosh blag horse.",
    author: 'Rosalina D.William', 
    }
]

export const PDPPost = () => {
  return (
    <div className={styles.pdp_post_main_container}>
        <div className={styles.post_pdp}>
            <img src={data[0].img} alt="" />
            <div className={styles.post_data_container}>
                <h1>{data[0].title}</h1>
                <div className={styles.span_div}>
                    <p>{data[0].date}</p>
                </div>
                <p>{data[0].text}</p>
                <div className={styles.author_quote_container}>
                    <p className={styles.autor_quote}>{data[0].authorQuote}</p>
                    <p className={styles.author}><BsFillPenFill className={styles.pen_icon}/>{data[0].author}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
