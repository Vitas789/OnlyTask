import { font, mediaBreakpointDown } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    background: ${(props) => props.theme.widgetsBackground};
    border-radius: 16px;
    padding: 20px;

    ${mediaBreakpointDown('fhd')} {
        padding: 12px;
    }

    ${mediaBreakpointDown('md')} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & > span {
        display: block;
        ${font('text5')}
        color: ${(props) => props.theme.contrastColor};
        font-weight: 500;
        margin-bottom: 10px;

        ${mediaBreakpointDown('fhd')} {
            margin-bottom: 7px;
        }

        ${mediaBreakpointDown('md')} {
            margin-bottom: 0px;
        }
    }
`;

export const WidgetThemeSwitcher = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    & > p {
        width: 70px;
        margin-right: 20px;
        font-weight: 400;
        ${font('text2')}
        color: ${(props) => props.theme.color};

        ${mediaBreakpointDown('fhd')} {
            width: 53px;
            margin-right: 12px;
        }
    }

    & > div {
        position: relative;
        width: 54px;
        height: 28px;
        border-radius: 555px;
        padding: 2px;
        border: 2px solid ${(props) => (props.theme === 'light' ? 'rgba(35, 35, 35, 0.2)' : 'rgba(130, 130, 130, 0.2)')};

        ${mediaBreakpointDown('fhd')} {
            width: 34px;
            height: 18px;
            padding: 1px;
        }

        ${mediaBreakpointDown('xl')} {
            width: 26px;
            height: 14px;
            padding: 1px;
        }
    }

    .thumb {
        display: block;
        width: 21px;
        height: 21px;
        border-radius: 100%;
        background-color: ${(props) => props.theme.switchButton};
        transform: translate(0px);
        transition: transform 0.3s ease;

        ${mediaBreakpointDown('fhd')} {
            width: 14px;
            height: 14px;
        }

        ${mediaBreakpointDown('xl')} {
            width: 10px;
            height: 10px;
        }
    }

    .checkbox {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        margin: 0;
        z-index: 10;
        cursor: pointer;

        :checked + .thumb {
            transform: translate(26px);

            ${mediaBreakpointDown('fhd')} {
                transform: translate(14.5px);
            }

            ${mediaBreakpointDown('xl')} {
                transform: translate(11px);
            }
        }
    }
`;
