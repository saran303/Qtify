import React, { useEffect, useState } from 'react'
// import Swiper from 'swiper'
import { useSwiper } from 'swiper/react';
import LeftArrow from '../../assets/LeftArrow.png'
import styles from './Carousel.module.css'

const CarouselLeftNavigiation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
    console.log(isBeginning)

    useEffect(() => {
        swiper.on("slideChange", function(){
          console.log(isBeginning)
          setIsBeginning(swiper.isBeginning);
          console.log(isBeginning)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isBeginning])
  return (
    <div className={styles.leftNavigation} >
        {!isBeginning && <img src={LeftArrow} alt="Left Arrow" onClick={() => swiper.slidePrev()} />}
    </div>
  )
}

export default CarouselLeftNavigiation