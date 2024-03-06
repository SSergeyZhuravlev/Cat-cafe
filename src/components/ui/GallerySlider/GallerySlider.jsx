import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Button } from '../Button/Button';
import 'swiper/css';
import 'swiper/css/navigation';
import './GallerySlider.css';

export const GallerySlider = ( { gallery } ) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const leftBtnRef = useRef(null);
    const rightBtnRef = useRef(null);

    return (
        <div className='gallery-slider-wrapper'>
            <Button className='gallery-slider__btn gallery-slider__btn--left' ref={leftBtnRef}>
                <img src="./src/assets/gallery-left-arrow.svg" alt="Стрелка назад" />
            </Button>
            <Button className='gallery-slider__btn gallery-slider__btn--right' ref={rightBtnRef}>
                <img src="./src/assets/gallery-right-arrow.svg" alt="Стрелка вперед" />
            </Button>
            <Swiper 
                onSlideChange={(slider) => setActiveSlide(slider.realIndex)}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.nextEl = rightBtnRef.current;
                    swiper.params.navigation.prevEl = leftBtnRef.current;
                }}
                className='gallery-slider gallery-slider--big'
                navigation={
                    {
                        nextEl: rightBtnRef.current,
                        prevEl: leftBtnRef.current,
                    }
                }
                loop={true}
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                spaceBetween={30}
                slidesPerView={1}>
                {
                    gallery.map(( { id, src, alt } ) => (
                        <SwiperSlide key={id} className='gallery-slider__slide--big'>
                            <img src={src} alt={alt} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                className='gallery-slider gallery-slider--small'
                loop={true}
                modules={[Thumbs]}
                onSwiper={(e) => setThumbsSwiper(e)}
                spaceBetween={20}
                slidesPerView={4}>
                {
                    gallery.map(( { id, src, alt }, index ) => (
                        <SwiperSlide className={activeSlide === index ? 'gallery-slider__slide--small active-slide' : 'gallery-slider__slide--small'} key={id}>
                            <img src={src} alt={alt} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}