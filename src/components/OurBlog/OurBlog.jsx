import React from 'react'
import styles from './OurBlog.module.css'


export const OurBlog = () => {
  return (
    <div className={styles.main_ourblog_container}>
        <div className={styles.ourblog}>
            <img src="https://www.eurekalabs.io/benefits-character.svg" alt="" />
            <h1>Our Blog</h1>
            <div className={styles.vertical_red_div}></div>
        </div>
    </div>
  )
}
