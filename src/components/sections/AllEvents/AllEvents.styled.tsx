import { mediaBreakpointDown } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    ${mediaBreakpointDown('fhd')} {
        max-width: 1080px;
        margin: 0 auto;
    }

    ${mediaBreakpointDown('xl')} {
        max-width: 700px;
        margin: 0 auto;
    }

    & > div {
        margin-bottom: 80px;

        &:nth-child(3n + 2) {
            margin-left: 40px;
            margin-right: 40px;

            ${mediaBreakpointDown('fhd')} {
                margin-left: 28px;
                margin-right: 28px;
            }

            ${mediaBreakpointDown('xl')} {
                margin-left: 0px;
                margin-right: 0px;
            }
        }

        &:nth-child(2n) {
            ${mediaBreakpointDown('xl')} {
                margin-left: 20px;
                margin-right: 0px;
            }
        }
    }
`;
