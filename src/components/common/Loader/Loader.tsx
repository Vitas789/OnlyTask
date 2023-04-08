import React from 'react';
import { Container } from './Loader.styled';

interface LoaderProps {
    /* Component props */
}

const Loader: React.FC<LoaderProps> = () => {
    return (
        <Container>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    );
};

export default Loader;
