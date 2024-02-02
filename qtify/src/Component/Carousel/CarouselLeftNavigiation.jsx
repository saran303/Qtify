import React, { useEffect, useState } from 'react'
// import Swiper from 'swiper'
import { useSwiper } from 'swiper/react';
import LeftArrow from '../../assets/LeftArrow.png'
import styles from './Carousel.module.css'

const CarouselLeftNavigiation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function(){
          setIsBeginning(swiper.isBeginning);
        })
    }, [isBeginning, swiper])
  return (
    <div className={styles.leftNavigation} >
        {isBeginning ? null : <img src={LeftArrow} alt="Left Arrow" onClick={() => swiper.slidePrev()} /> }
    </div>
  )
}

export default CarouselLeftNavigiation