import { font, mediaBreakpointDown } from '@/style/mixins';
import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;
    max-width: 1190px;
    border-radius: 16px;
    margin-right: 40px;

    ${mediaBreakpointDown('fhd')} {
        max-width: 803px;
        margin-right: 28px;
    }

    ${mediaBreakpointDown('xl')} {
        max-width: 517px;
        margin-right: 20px;
    }
`;

export const WidgetsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 370px;

    ${mediaBreakpointDown('fhd')} {
        max-width: 249px;
    }

    ${mediaBreakpointDown('xl')} {
        max-width: 159px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    padding-top: 120px;
    margin: 0 auto;
    padding-bottom: 120px;

    & > h1 {
        flex: 100%;
        ${font('text6')};
        font-weight: 500;
        margin-bottom: 28px;
        color: ${(props) => props.theme.color};

        ${mediaBreakpointDown('fhd')} {
            margin-bottom: 20px;
        }

        ${mediaBreakpointDown('xl')} {
            margin-bottom: 12px;
        }

        ${mediaBreakpointDown('md')} {
            margin-bottom: 20px;
        }
    }

    button {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.color};
    }
`;
