import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Search from '../Searchbar/Search'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        {/* <div className={styles.logoDiv} ><img src={Logo} alt="Logo" /></div> */}
        <Search placeholder={"Search a album of your choice"}/>
        <Button text={"Give Feedback"}/>
    </nav>
  )
}

export default Navbar