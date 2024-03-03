import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const GalarySlider = () => {
    return (
        <Swiper 
        navigation
        loop={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}>
            <SwiperSlide>
                <img src="/src/assets/Frame.png" alt="Фото кафе" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/src/assets/Frame.png" alt="Фото кафе" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/src/assets/Frame.png" alt="Фото кафе" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/src/assets/Frame.png" alt="Фото кафе" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/src/assets/Frame.png" alt="Фото кафе" />
            </SwiperSlide>
        </Swiper>
    )
}