import React from 'react';
import { Container, SliderNavigationButton } from './SliderNavigation.styled';
import Swiper from 'swiper';
import NavigationIcon from '../../../icons/icon_spoiler.svg';

interface SliderNavigationProps {
    swiper: Swiper;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({ swiper }) => {
    const onPrevClick = () => swiper.slidePrev();
    const onNextClick = () => swiper.slideNext();

    return (
        <Container>
            <SliderNavigationButton onClick={onPrevClick} isReverse={true}>
                <NavigationIcon />
            </SliderNavigationButton>
            <SliderNavigationButton onClick={onNextClick}>
                <NavigationIcon />
            </SliderNavigationButton>
        </Container>
    );
};

export default SliderNavigation;
