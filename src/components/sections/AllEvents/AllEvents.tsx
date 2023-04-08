import React from 'react';
import { Container } from './AllEvents.styled';
import EventCard from '@/components/blocks/EventCard/EventCard';

interface AllEventsProps {
    events?: any;
}

const AllEvents: React.FC<AllEventsProps> = ({ events }) => {
    return (
        <Container>
            {events.map((item: any, index: number) => (
                <EventCard key={index} type="small" {...item} />
            ))}
        </Container>
    );
};

export default AllEvents;
