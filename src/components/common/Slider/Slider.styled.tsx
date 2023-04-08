import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
    position: relative;

    .swiper {
        border-radius: 16px;
    }
`;

export const SliderSwiper = styled(Swiper)`
    .swiper-slide {
        height: auto;
    }
`;

export const SliderWrapper = styled.div`
    position: relative;
`;
