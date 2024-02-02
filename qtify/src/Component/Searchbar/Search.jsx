import React from 'react'
import SearchIcon from '../../assets/searchIcon.png'
import styles from './Search.module.css'
const Search = ({placeholder}) => {
  return (
    <form className={styles.wrapper}>
        <div>
            <input placeholder={placeholder} className={styles.search}/>
        </div>
        <div>
            <button type='submit' className={styles.serachButton}>
                {/* <Searchicon /> */}
                <img src={SearchIcon} alt="SearchIcon" width={20} height={20}/>
            </button>
        </div>
    </form>
  )
}

export default Search