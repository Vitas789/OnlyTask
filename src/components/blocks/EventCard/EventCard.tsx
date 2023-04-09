import React from 'react';
import { EventCardBg, EventCardBgImg, EventCardBody, Container, EventCardPlace, EventCardCopyLink } from './EventCard.styled';
import { IMainLeadProps } from '@/interfaces';
import { SwiperSlide } from 'swiper/react';
import Slider from '@/components/common/Slider/Slider';

interface EventCardProps extends IMainLeadProps {
    title: string;
    description?: string;
    date: string;
    place: string;
    picture: {
        src: string;
    }[];
    type?: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, date, place, picture, type }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(`${title}, ${description || ''} ${date}`);
    };
    return (
        <Container className={type || ''}>
            <EventCardBg className={type || ''}>
                {type && <EventCardCopyLink onClickFunc={copyToClipboard} className={type || ''} />}
                {picture.length < 2 ? (
                    <EventCardBgImg src={picture[0].src} alt="" layout="fill" objectFit="cover" />
                ) : (
                    <Slider
                        navigation={false}
                        swiperOptions={{
                            autoplay: {
                                delay:  4000
                            }
                        }}>
                        {picture.map((item, index) => (
                            <SwiperSlide key={index}>
                                <EventCardBgImg src={item.src} alt="" layout="fill" objectFit="cover" />
                            </SwiperSlide>
                        ))}
                    </Slider>
                )}
            </EventCardBg>
            <EventCardBody className={type || ''}>
                <div>
                    {!type && <EventCardCopyLink onClickFunc={copyToClipboard} className={type || ''} />}
                    <p>{title}</p>
                    {description && <span>{description}</span>}
                    <EventCardPlace className={type || ''}>
                        <span>{date}</span>
                        <span>{place}</span>
                    </EventCardPlace>
                </div>
            </EventCardBody>
        </Container>
    );
};

export default EventCard;
