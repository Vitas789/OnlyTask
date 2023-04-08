import React from 'react';
import { Container, SliderNavigationButton } from './SliderNavigation.styled';
import Swiper from 'swiper';
import NavigationIcon from '../../../icons/icon_spoiler.svg';

interface SliderNavigationProps {
    swiper?: Swiper;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({ swiper }) => {
    return (
        <Container>
            <SliderNavigationButton onClick={() => swiper?.slidePrev()}>
                <NavigationIcon className="reverse" />
            </SliderNavigationButton>
            <SliderNavigationButton onClick={() => swiper?.slideNext()}>
                <NavigationIcon />
            </SliderNavigationButton>
        </Container>
    );
};

export default SliderNavigation;
