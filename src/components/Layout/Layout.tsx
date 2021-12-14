import React from 'react';
import Head from 'next/head';
import { Container } from './Layout.styled';
import { Header, Footer } from '@/components';

interface LayoutProps {
    /* Layout props */
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Название</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Описание" />
                <meta name="keywords" content="Ключевые слова" />
            </Head>

            <Header />

            <Container>
                {children}
                <Footer />
            </Container>
        </>
    );
};

export default Layout;
