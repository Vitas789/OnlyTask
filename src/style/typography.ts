import { css, FlattenSimpleInterpolation } from 'styled-components';

export const rem: (size: number, rootFontSize?: number) => string = (size, rootFontSize = 16) => {
    return `${size / rootFontSize}rem`;
};

export const remFluidMiddle: (
    property: string,
    minSize: number,
    tabletSize: number,
    smallDeskSize: number,
    maxSize: number,
    rootFontSize?: number
) => FlattenSimpleInterpolation = (property, minSize, tabletSize, smallDeskSize, maxSize, rootFontSize = 16) => {
    const minSizeRem = rem(minSize);
    const tabletSizeRem = rem(tabletSize);
    const smallDeskSizeRem = rem(smallDeskSize);
    const maxSizeRem = rem(maxSize);

    return css`
        //mobile
        ${property}: ${rem(minSize * 0.8)};

        @media (min-width: 370px) {
            ${property}: ${minSizeRem};
        }

        @media (min-width: 500px) {
            ${property}: calc(${minSizeRem} + ( ${tabletSize / rootFontSize} - ${minSize / rootFontSize}) * 
                            ((100vw - ${rem(370)}) / (767 - 370)));
        }

        // tablet
        @media (min-width: 767px) {
            ${property}: calc(${tabletSizeRem} + (${smallDeskSize / rootFontSize} - ${tabletSize / rootFontSize}) *
                            ((100vw - ${rem(767)}) / (1280 - 767)));

            @media (max-height: 500px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.6} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1280 - 767)));
            }

            @media (max-height: 750px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.7} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1280 - 767)));
            }
        }

        //min desk
        @media (min-width: 1280px) {
            ${property}: calc(${smallDeskSizeRem} + (${maxSize / rootFontSize} - ${smallDeskSize / rootFontSize}) * 
                ((100vw - ${rem(1280)}) / (1920 - 1280)));

            @media (max-height: 500px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.6} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }

            @media (max-height: 750px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.7} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }
        }

        // больше 1920
        @media (min-width: 1920px) {
            ${property}: ${maxSizeRem};

            @media (max-height: 500px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.6} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }

            @media (max-height: 750px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.7} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }
        }

        @media (min-width: 2000px) {
            ${property}: ${(maxSize / 1920) * 100}vw;
        }
    `;
};
export const remAdaptiveFont = (
    minSize: number,
    tabletSize: number,
    smallDeskSize: number,
    maxSize: number
): FlattenSimpleInterpolation => {
    return remFluidMiddle('font-size', minSize, tabletSize, smallDeskSize, maxSize, 16);
};

export const pxAdaptiveFont = (desktopFhd: number, desktopXl: number, tablet: number, mobile: number) => {
    return css`
        font-size: ${mobile}px;

        @media (min-width: 767px) {
            font-size: ${tablet}px;
        }

        @media (min-width: 1279px) {
            font-size: ${desktopXl}px;
        }

        @media (min-width: 1919px) {
            font-size: ${desktopFhd}px;
        }
    `;
};

const typography = {
    font16: css`
        ${pxAdaptiveFont(16, 15, 14, 12)};
        line-height: 1;
        font-weight: 400;
    `,

    text1: css`
        ${pxAdaptiveFont(40, 26, 18, 16)};
        line-height: 1;
    `,

    text2: css`
        ${pxAdaptiveFont(18, 14, 12, 11)};
        line-height: 1;
    `,

    text3: css`
        ${pxAdaptiveFont(26, 18, 14, 14)};
        line-height: 1.4;
    `,
    text4: css`
        ${pxAdaptiveFont(18, 12, 12, 12)};
        line-height: 1.4;
    `,
    text5: css`
        ${pxAdaptiveFont(20, 14, 12, 12)};
        line-height: 1;
    `,

    text6: css`
        ${pxAdaptiveFont(36, 24, 20, 18)};
        line-height: 1;
    `,

    bigText: css`
        ${pxAdaptiveFont(80, 50, 36, 36)};
        line-height: 1;
    `,

    text7: css`
        ${pxAdaptiveFont(14, 12, 10, 10)};
        line-height: 1;
    `
};

export type Typography = keyof typeof typography;

export default typography;
