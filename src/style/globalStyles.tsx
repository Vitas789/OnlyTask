import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import { color } from './mixins';
import { ITheme } from '@/interfaces';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
    * {
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    html {
        font-family: ${variables.fonts.graphikLCG};
        scrollbar-gutter: stable;
        color: ${color('black')};
    }

    body {
        padding: 0;
        margin: 0;
        overscroll-behavior: none;
        overflow: auto;
        transition: 0.3s all ease;
        background-color: ${(props) => props.theme.backgroundColor};
    }


    h1, h2, h3, h4, h5, span, a, p {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-transform: inherit;
        text-decoration: inherit;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        outline: none;
    }

    button {
        font-family: ${variables.fonts.default};
        
        &, &:active,
        &:focus {
            outline: none;
        }
    }
`;

export default GlobalStyle;
