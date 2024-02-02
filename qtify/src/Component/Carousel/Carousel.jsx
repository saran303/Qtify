import React, { useEffect } from 'react'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import styles from './Carousel.module.css'
import CarouselLeftNavigiation from './CarouselLeftNavigiation';
import CarouselRightNavigiation from './CarouselRightNavigiation';

const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])
    return <></>
}

const Carousel = ({data, renderComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper
        style={{padding:" 0px 20px"}}
        initialSlide={0}
        slidesPerView="auto"
        spaceBetween={40}
        modules={[Navigation]}
        allowTouchMove
        >
            <Controls />
            <CarouselLeftNavigiation />
            <CarouselRightNavigiation />
            {
                data.map((ele) => {
                    return (
                        <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
  )
}

export default Carousel