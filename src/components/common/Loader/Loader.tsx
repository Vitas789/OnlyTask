import React from 'react';
import { Container } from './Loader.styled';
import { BaseUI } from '@/interfaces';

export interface LoaderProps extends BaseUI {

}

const Loader: React.FC<LoaderProps> = ({ className }) => {
    return (
        <Container className={className}>
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
