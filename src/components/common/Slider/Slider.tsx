import React, { useState } from 'react';
import { Container, SliderSwiper, SliderWrapper } from './Slider.styled';
import SwiperCore, { Controller, Keyboard, Autoplay } from 'swiper';
import { SwiperOptions } from 'swiper';
import SliderNavigation from '../SliderNavigation/SliderNavigation';

interface SliderProps {
    swiperOptions?: SwiperOptions;
    navigation?: boolean;
}

const SWIPER_OPTIONS: SwiperOptions = {
    slidesPerView: 'auto',
    speed: 800,
    keyboard: false,
    loop: true,
    spaceBetween: 25,
    autoplay: {
        disableOnInteraction: false
    }
};

SwiperCore.use([Controller, Keyboard, Autoplay]);

const Slider: React.FC<SliderProps> = ({ children, navigation = true, swiperOptions }) => {
    const [swiper, setSwiper] = useState<SwiperCore>();
    const optionsSlider: SwiperOptions = { ...SWIPER_OPTIONS, ...swiperOptions };
    return (
        <Container>
            <SliderWrapper>
                <SliderSwiper onSwiper={setSwiper} {...optionsSlider}>
                    {children}
                </SliderSwiper>
            </SliderWrapper>
            {navigation && swiper && <SliderNavigation swiper={swiper} />}
        </Container>
    );
};

export default Slider;
