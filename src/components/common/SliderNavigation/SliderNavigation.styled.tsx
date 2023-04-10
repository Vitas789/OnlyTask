import { mediaBreakpointDown } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    display: flex;
    top: 40px;
    right: 40px;
    z-index: 10;

    .reverse {
        transform: scale(-1, 1);
    }

    ${mediaBreakpointDown('fhd')} {
        top: 28px;
        right: 28px;
    }

    ${mediaBreakpointDown('xl')} {
        top: 20px;
        right: 20px;
    }

    ${mediaBreakpointDown('md')} {
        top: 12px;
        right: 12px;
    }
`;

interface SliderNavigationButtonProps {
    isReverse?: boolean;
}

// В качестве альтернативы, можно использовать button вместо div
export const SliderNavigationButton = styled.div.attrs(() => ({
    tabIndex: 0,
    role: 'button'
}))<SliderNavigationButtonProps>`
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.15);
    cursor: pointer;
    transition: background 0.3s ease;

    ${mediaBreakpointDown('fhd')} {
        width: 40px;
        height: 40px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 36px;
        height: 36px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.6);
    }

    &:first-of-type {
        margin-right: 10px;

        ${mediaBreakpointDown('md')} {
            margin-right: 8px;
        }
    }

    svg {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 16px;
        left: 18px;
        transform: scale(${({ isReverse }) => isReverse ? -1 : 1}, 1);

        ${mediaBreakpointDown('fhd')} {
            width: 16px;
            height: 16px;
            top: 12px;
            left: 12px;
        }

        ${mediaBreakpointDown('xl')} {
            width: 14px;
            height: 14px;
            top: 11px;
            left: 11px;
        }
    }
`;
