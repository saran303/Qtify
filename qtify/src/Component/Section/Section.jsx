import React, { useState } from 'react'
import styles from './Section.module.css'
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel';
import BasicTabs from '../Tabs/Tabs';

const Section = ({data, title, type, value=0, handleChange=null, filteredDataValues=[]}) => {

    const [carouselToggle, setCarouselToggle] = useState(true);

    const handleToggle =() =>(
        setCarouselToggle(!carouselToggle)
    )
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            {type !== "song" ?
            <h4 className={styles.toggleText} onClick={handleToggle}>
                {!carouselToggle ? "Collapse" : "Show all"}
            </h4> : null}
        </div>
        {type === "song" ? <BasicTabs value={value} handleChange={handleChange}/> : null}
        {
            data.length === 0 ? (
                <CircularProgress />
            ) : (
                <div className={styles.cardsWrapper}>
                    <div>
                        {!carouselToggle ? (<div className={styles.wrapper}>
                            {data.map((ele) => (
                                <Card data={ele} type={type} key={ele.id}/>
                            ))}
                        </div>) : (<Carousel data={filteredDataValues} renderComponent={(data) => <Card data={data} type={type} key={data.id}/>} />)}
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Section