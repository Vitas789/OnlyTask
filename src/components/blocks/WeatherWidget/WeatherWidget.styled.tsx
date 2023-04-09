import Loader from '@/components/common/Loader/Loader';
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
`;

export const WeatherLoaderContainer = styled.div`
    position: relative;
    background: ${(props) => props.theme.widgetsBackground};
    display: flex;
    border-radius: 16px;
    padding: 20px;
    width: 370px;
    height: 439px;

    ${mediaBreakpointDown('fhd')} {
        padding: 12px;
        margin-bottom: 12px;
    }

    ${mediaBreakpointDown('fhd')} {
        width: 249px;
        height: 304px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 159px;
        height: 291px;
    }

    ${mediaBreakpointDown('md')} {
        width: 335px;
        height: 172px;
    }
`;

export const WeatherLoader = styled(Loader)`
    padding-top: 100px;
    margin: 0 auto;

    ${mediaBreakpointDown('md')} {
        padding-top: 35px;
    }

    .lds-ring {
        ${mediaBreakpointDown('fhd')} {
            width: 70px;
            height: 70px;
        }
        & > div {
            ${mediaBreakpointDown('fhd')} {
                width: 60px;
                height: 60px;
            }
        }
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
                margin-right: 8px;
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
    margin-bottom: 66px;

    ${mediaBreakpointDown('fhd')} {
        margin-bottom: 50px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-bottom: 15px;
    }

    ${mediaBreakpointDown('md')} {
        flex-direction: row;
    }

    & > div {
        &:last-of-type {
            display: flex;
            flex-direction: column;
            ${mediaBreakpointDown('md')} {
                margin-left: 20px;
            }
        }
    }

    p {
        ${font('text4')};
        font-weight: 400;
        color: ${(props) => props.theme.color};

        &:first-of-type {
            text-transform: capitalize;
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
`;

export const WeatherFooter = styled.div`
    display: flex;
    width: 100%;
    color: ${(props) => props.theme.color};

    ${mediaBreakpointDown('xl')} {
        flex-wrap: wrap;
    }

    ${mediaBreakpointDown('md')} {
        flex-wrap: nowrap;
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
        }

        ${mediaBreakpointDown('md')} {
            margin-right: 40px;
        }

        &:last-of-type {
            ${mediaBreakpointDown('xl')} {
                margin-top: 12px;
            }
            ${mediaBreakpointDown('md')} {
                margin-top: 0px;
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
