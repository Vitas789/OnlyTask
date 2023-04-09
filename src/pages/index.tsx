import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '@/components/common/Layout/Layout';
import { IAllEventsProps, BasePageProps, IMainLeadProps } from '@/interfaces';
import { getAllEvents, getMainLead } from '@/lib/api';
import MainLead from '@/components/sections/MainLead/MainLead';
import AllEvents from '@/components/sections/AllEvents/AllEvents';

interface IndexProps extends BasePageProps {
    mainLead?: IMainLeadProps;
    allEvents?: IAllEventsProps;
}

const Index: React.FC<IndexProps> = (props) => {
    return (
        <Layout meta={props.meta} header={props.header} sandwich={props.sandwich}>
            <MainLead {...props.mainLead} />
            <AllEvents {...props.allEvents} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    const mainLead = await getMainLead();
    const allEvents = await getAllEvents();

    return {
        props: {
            meta: {
                title: 'Title',
                description: 'description',
                keywords: 'keywords'
            },
            header: {},
            sandwich: {},
            mainLead,
            allEvents
        },
        revalidate: 1
    };
};

export default Index;
