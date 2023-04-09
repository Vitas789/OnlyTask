import { font, mediaBreakpointDown } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    margin: 0 auto;
    padding-top: 160px;
    padding-bottom: 120px;

    ${mediaBreakpointDown('fhd')} {
        padding-top: 100px;
        padding-bottom: 80px;
    }

    ${mediaBreakpointDown('xl')} {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    ${mediaBreakpointDown('md')} {
        padding-bottom: 28px;
    }

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

    ${mediaBreakpointDown('md')} {
        width: 100%;
        margin-right: 0;
        margin-bottom: 28px;
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

    ${mediaBreakpointDown('md')} {
        max-width: 100%;
        width: 100%;
    }
`;
