'use client';
import './banner.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
    EffectFade,
    Navigation,
    Pagination,
    Scrollbar,
    Keyboard,
    Grid,
    Mousewheel,
    EffectCube,
    EffectCoverflow,
    EffectFlip,
    EffectCards,
    Thumbs,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cards';
import 'swiper/css/thumbs';

function Banner() {
    return (
        <div className="containerBanner">
            <Swiper
                className="mySwiper"
                modules={[EffectCards, Thumbs]}
                slidesPerView={2}
                loop={true}
            >
                <SwiperSlide>Horizontal Slide 1</SwiperSlide>

                <SwiperSlide>Vertical Slide 1</SwiperSlide>
                <SwiperSlide>Vertical Slide 2</SwiperSlide>
                <SwiperSlide>Verstical Slide 3</SwiperSlide>
                <SwiperSlide>Vertical Slide 4</SwiperSlide>
                <SwiperSlide>Vertical Slide 5</SwiperSlide>

                <SwiperSlide>Horizontal Slide 3</SwiperSlide>
                <SwiperSlide>Horizontal Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
