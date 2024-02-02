import React from 'react';
import HeroImg from '../../assets/heroImg.png'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={HeroImg} alt="headphones" width={212} height={212}/>
        </div>
    </div>
  )
}

export default Hero