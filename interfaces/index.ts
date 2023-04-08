import { HeaderProps } from '@/components/common/Header/Header';
import { SandwichProps } from '@/components/common/Sandwich/Sandwich';
import React from 'react';

export type DeviceTypes = 'mobile' | 'tablet' | 'smallDesktop' | 'desktop';

/**
 * @description - Тип для мета-тегов на странице
 */
export interface MetaInfo {
    title: string;
    description?: string;
    keywords?: string;
}

/**
 * @description Базовый интерфейс с описанием полей, существующих на любой странице
 */
export interface BasePageProps {
    meta: MetaInfo;
    header: HeaderProps;
    sandwich: SandwichProps;
}

export interface MainLeadProps {
    slides: {
        title: string;
        description: string;
        date: string;
        place: string;
        picture: {
            src: string;
        }[];
    }[];
}

export interface IAllEventsProps {
    events: {
        title: string;
        date: string;
        place: string;
        picture: {
            src: string;
        }[];
    }[];
}

export interface ITheme {
    backgroundColor: string;
    color: string;
}

/**
 * @description Базовый интерфейс для компонентов, которые предполагают стилизацию с помощью styled-components
 */
export interface BaseUI {
    className?: string;
    children?: React.ReactNode;
}
