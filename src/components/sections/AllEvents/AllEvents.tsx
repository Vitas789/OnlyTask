import React from 'react';
import { Container } from './AllEvents.styled';
import EventCard from '@/components/blocks/EventCard/EventCard';
import { IAllEventsProps } from '@/interfaces';

interface AllEventsProps extends IAllEventsProps {
}

const AllEvents: React.FC<AllEventsProps> = ({ events }) => {
    return (
        <Container>
            {events && events.map((item, index) => (
                <EventCard key={index} type="small" {...item} />
            ))}
        </Container>
    );
};

export default AllEvents;
