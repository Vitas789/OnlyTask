import { mediaBreakpointDown } from '@/style/mixins';
import styled from 'styled-components';

// Интерактивная кнопка, такое лучше делать с помощью тега button или дополнять aria-атрибутами
export const Container = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.15);
    cursor: pointer;
    z-index: 10;
    transition: background 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.6);
    }

    ${mediaBreakpointDown('fhd')} {
        width: 40px;
        height: 40px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 36px;
        height: 36px;
    }

    svg {
        position: absolute;
        width: 28px;
        height: 28px;
        top: 15px;
        left: 16px;

        ${mediaBreakpointDown('fhd')} {
            width: 19px;
            height: 19px;
            top: 10px;
            left: 10px;
        }

        ${mediaBreakpointDown('xl')} {
            width: 17px;
            height: 17px;
            top: 9px;
            left: 10px;
        }
    }
`;
