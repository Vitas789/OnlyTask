import { useState, useEffect } from 'react';

export const useThemeSwitch = () => {
    const [theme, setTheme] = useState<any>('light');

    useEffect(() => {
        const test = localStorage.getItem('theme');
        setTheme(test);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme };
};
