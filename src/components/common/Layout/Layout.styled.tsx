import { mediaBreakpointDown } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.main`
    position: relative;
    max-width: 1601px;
    margin: 0 auto;

    ${mediaBreakpointDown('fhd')} {
        max-width: 1080px;
    }

    ${mediaBreakpointDown('xl')} {
        max-width: 700px;
    }

    ${mediaBreakpointDown('md')} {
        max-width: 335px;
    }
`;
