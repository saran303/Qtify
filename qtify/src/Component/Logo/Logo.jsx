import React from 'react'
import LogoImg from '../../assets/logoImg.png'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <img src={LogoImg} alt="LogoImage" width={67} height={34} className={styles.logo} />
  )
}

export default Logo