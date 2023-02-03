import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.main_container}>
        <div className={styles.img_and_title_container}>
            <img src="https://www.eurekalabs.io/brand-eurekalabs.svg" alt="" />
        </div>
        <div className={styles.roots_container}>
            <p>Talent</p>
            <p>Partners</p>
            <p>Inside EL</p>
            <p>Our Work</p>
            <p>Product Factory</p>
            <button>Let's Talk</button>
        </div>
    </div>
  )
}
