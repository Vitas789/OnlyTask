import { DeviceTypes } from '@/interfaces';

export const getDeviceType = (): DeviceTypes => {
    if (window.innerWidth <= 768) return 'mobile';
    if (window.innerWidth > 768 && window.innerWidth < 1200) return 'tablet';
    if (window.innerWidth >= 1200 && window.innerWidth < 1400) return 'smallDesktop';
    return 'desktop';
};

/**
 * @returns Возможность touch-управления на устройстве
 */
export const isTouchDevice = (): boolean => {
    return !!('ontouchstart' in window || navigator.maxTouchPoints);
};

export const baseParallax = (element: HTMLElement, offset: number, multiply: number = 0.1) => {
    if (window.innerWidth <= 1024) return;
    if (offset > element.offsetTop + element.offsetHeight || offset < element.offsetTop - window.innerHeight) return;
    const translateY = (offset - element.offsetTop) * multiply;
    element.style.transform = `translate3d(0, ${translateY}px, 0)`;
};

export const formatTime = (item: any) => {
    return +item.dt_txt.split(' ')[1].split(':')[0];
};

export const getMonthName = () => {
    const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "откября", "ноября", "декабря"
    ];
    const date = new Date();
    return monthNames[date.getMonth()];
}

export const getDayName = () => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const date = new Date();
    return days[date.getDay()];
}

export const formatWeather = (item: number) => {
    return item > 0 ? `+${Math.floor(item)}°` : `${Math.floor(item)}°`
};