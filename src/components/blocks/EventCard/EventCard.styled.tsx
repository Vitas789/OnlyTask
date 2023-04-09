import styled from 'styled-components';
import Image from '@/components/common/Image/Image';
import { color, font, mediaBreakpointDown } from '@/style/mixins';
import CopyLink from '@/components/common/CopyLink/CopyLink';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 560px;

    ${mediaBreakpointDown('fhd')} {
        height: 380px;
    }

    ${mediaBreakpointDown('xl')} {
        height: 360px;
    }

    &.small {
        width: 507px;
        position: relative;
        height: fit-content;

        ${mediaBreakpointDown('fhd')} {
            width: 341px;
        }

        ${mediaBreakpointDown('xl')} {
            width: 338px;
        }

        .swiper-wrapper {
            width: 100%;
            height: 300px;

            ${mediaBreakpointDown('fhd')} {
                height: 200px;
            }

            ${mediaBreakpointDown('xl')} {
                height: 220px;
            }
        }
    }
`;

export const EventCardCopyLink = styled(CopyLink)`
    top: 40px;
    left: 40px;

    ${mediaBreakpointDown('fhd')} {
        top: 28px;
        left: 28px;
    }

    ${mediaBreakpointDown('xl')} {
        top: 20px;
        left: 20px;
    }

    ${mediaBreakpointDown('md')} {
        top: 12px;
        left: 12px;
    }

    &.small {
        top: 20px;
        left: 20px;

        ${mediaBreakpointDown('fhd')} {
            width: 34px;
            height: 34px;
            top: 12px;
            left: 12px;

            ${mediaBreakpointDown('xl')} {
                width: 30px;
                height: 30px;
            }

            svg {
                ${mediaBreakpointDown('fhd')} {
                    width: 16px;
                    height: 16px;
                    top: 9px;
                    left: 9px;
                }

                ${mediaBreakpointDown('xl')} {
                    width: 14px;
                    height: 14px;
                    top: 8px;
                    left: 8px;
                }
            }
        }
    }
`;

export const EventCardBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;

    &.small {
        position: relative;
        width: 507px;
        min-height: 300px;
        z-index: 1;

        ${mediaBreakpointDown('fhd')} {
            width: 100%;
            min-height: 200px;
        }

        ${mediaBreakpointDown('xl')} {
            min-height: 220px;
        }
    }
`;

export const EventCardBgImg = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    border-radius: 16px;
`;

export const EventCardBody = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    align-items: flex-end;
    padding: 40px;
    color: ${color('white')};

    ${mediaBreakpointDown('fhd')} {
        padding: 28px;
    }

    ${mediaBreakpointDown('xl')} {
        padding: 20px;
    }

    ${mediaBreakpointDown('md')} {
        padding: 12px;
    }

    p {
        ${font('text1')}
        font-weight: 700;
        margin-bottom: 20px;

        ${mediaBreakpointDown('fhd')} {
            margin-bottom: 12px;
        }

        ${mediaBreakpointDown('xl')} {
            margin-bottom: 8px;
        }
    }

    span {
        ${font('text2')}
        font-weight: 400;
    }

    & > div {
        & > span {
            ${mediaBreakpointDown('md')} {
                display: block;
                max-width: 200px;
            }
        }
    }

    &.small {
        height: auto;
        padding: 20px 0 0 0;
        color: ${(props) => props.theme.color};

        ${mediaBreakpointDown('fhd')} {
            padding-top: 12px;
        }

        ${mediaBreakpointDown('xl')} {
            padding-top: 8px;
        }

        & div {
            margin-top: 0;
        }

        p {
            ${font('text3')}
            margin-bottom: 20px;

            ${mediaBreakpointDown('fhd')} {
                margin-bottom: 12px;
            }

            ${mediaBreakpointDown('xl')} {
                margin-bottom: 8px;
            }
        }

        span {
            ${font('text4')}

            &:first-of-type {
                margin-right: 50px;

                ${mediaBreakpointDown('fhd')} {
                    margin-right: 28px;
                }

                &::after {
                    background-color: ${(props) => props.theme.color};
                }
            }
        }
    }
`;

export const EventCardPlace = styled.div`
    margin-top: 20px;

    ${mediaBreakpointDown('fhd')} {
        margin-top: 12px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-top: 8px;
    }

    span {
        position: relative;

        &:first-of-type {
            margin-right: 50px;

            ${mediaBreakpointDown('md')} {
                margin-right: 20px;
            }

            &::after {
                content: '';
                position: absolute;
                width: 6px;
                height: 6px;
                right: -26px;
                top: 30%;
                border-radius: 100%;
                background-color: ${color('white')};

                ${mediaBreakpointDown('fhd')} {
                    width: 4px;
                    height: 4px;
                    top: 20%;
                    right: -16.5px;
                }

                ${mediaBreakpointDown('md')} {
                    width: 3px;
                    height: 3px;
                    top: 24%;
                    right: -12px;
                }
            }
        }
    }

    &.small {
        max-width: 470px;
        opacity: 0.6;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        ${mediaBreakpointDown('fhd')} {
            max-width: 313px;
        }
    }
`;
