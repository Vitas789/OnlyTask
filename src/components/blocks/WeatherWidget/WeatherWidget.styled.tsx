import { font, mediaBreakpointDown } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${(props) => props.theme.widgetsBackground};
    border-radius: 16px;
    padding: 20px;

    ${mediaBreakpointDown('fhd')} {
        padding: 12px;
        margin-bottom: 12px;
    }

    ${mediaBreakpointDown('xl')} {
        height: 291px;
    }
`;

export const WeatherHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 55px;

    ${mediaBreakpointDown('fhd')} {
        margin-bottom: 35px;
    }

    & > div {
        display: flex;
        margin-bottom: 20px;

        ${mediaBreakpointDown('fhd')} {
            margin-bottom: 10px;
        }

        span {
            ${font('text5')};
            font-weight: 500;
            color: #157bfb;
        }

        svg {
            width: 20px;
            height: 20px;
            margin-right: 10px;

            ${mediaBreakpointDown('fhd')} {
                width: 14px;
                height: 14px;
            }
        }
    }

    p {
        ${font('text4')};
        font-weight: 400;
        color: ${(props) => props.theme.color};
    }
`;

export const WeatherBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 82px;

    ${mediaBreakpointDown('fhd')} {
        margin-bottom: 62px;
    }

    & > p {
        ${font('text4')};
        font-weight: 400;
        color: ${(props) => props.theme.color};

        &:first-of-type {
            margin-bottom: 3px;
        }
    }

    & > div {
        display: flex;
        margin-bottom: 15px;

        ${mediaBreakpointDown('xl')} {
            margin-bottom: 12px;
        }

        svg {
            width: 80px;
            height: 80px;
            margin-right: 20px;
            color: ${(props) => props.theme.contrastColor};

            ${mediaBreakpointDown('fhd')} {
                width: 54px;
                height: 54px;
                margin-right: 12px;
            }

            ${mediaBreakpointDown('xl')} {
                width: 36px;
                height: 36px;
                margin-right: 8px;
            }
        }

        .temp {
            ${font('bigText')};
            font-weight: 600;
            color: ${(props) => props.theme.color};
        }
    }

    ${mediaBreakpointDown('xl')} {
        margin-bottom: 29px;
    }
`;

export const WeatherFooter = styled.div`
    display: flex;
    width: 100%;
    color: ${(props) => props.theme.color};

    ${mediaBreakpointDown('xl')} {
        flex-wrap: wrap;
    }

    svg {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        color: ${(props) => props.theme.contrastColor};

        ${mediaBreakpointDown('fhd')} {
            width: 16px;
            height: 16px;
            margin-right: 8px;
        }
    }

    & > div {
        margin-right: 40px;

        ${mediaBreakpointDown('fhd')} {
            margin-right: 20px;
        }

        ${mediaBreakpointDown('xl')} {
            margin-right: 12px;

            &:last-of-type {
                margin-top: 12px;
            }
        }

        & > div {
            display: flex;
            align-items: center;
        }

        & > p {
            ${font('text7')}
            opacity: 0.5;
            font-weight: 400;
            margin-bottom: 12px;

            ${mediaBreakpointDown('fhd')} {
                margin-bottom: 8px;
            }
        }

        span {
            ${font('text5')}
            font-weight: 600;
            line-height: 100%;
        }
    }
`;
