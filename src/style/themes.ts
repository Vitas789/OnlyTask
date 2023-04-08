import { color } from './mixins';

export const DarkTheme = {
    backgroundColor: color('dark'),
    widgetsBackground: color('gray'),
    contrastColor: color('darkBlue'),
    color: color('white'),
    switchButton: color('darkBlue')
};

export const LightTheme = {
    backgroundColor: color('white'),
    widgetsBackground: color('whiteGray'),
    contrastColor: color('blue'),
    color: color('textBlack'),
    switchButton: color('blue')
};
