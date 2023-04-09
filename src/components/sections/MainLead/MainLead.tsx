import { CardContainer, Container, WidgetsContainer } from './MainLead.styled';
import { SwiperSlide } from 'swiper/react';
import EventCard from '@/components/blocks/EventCard/EventCard';
import Slider from '@/components/common/Slider/Slider';
import WeatherWidget from '@/components/blocks/WeatherWidget/WeatherWidget';
import WidgetTheme from '@/components/blocks/WidgetTheme/WidgetTheme';
import { IMainLeadProps } from '@/interfaces';

interface MainLeadProps extends IMainLeadProps {
}

const MainLead: React.FC<MainLeadProps> = ({ slides }) => {
    return (
        <Container>
            <h1>Ближайшие мероприятия</h1>
            <CardContainer>
                <Slider>
                    {slides && slides.map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                            <EventCard {...item} />
                        </SwiperSlide>
                    ))}
                </Slider>
            </CardContainer>
            <WidgetsContainer>
                <WeatherWidget />
                <WidgetTheme />
            </WidgetsContainer>
        </Container>
    );
};

export default MainLead;
