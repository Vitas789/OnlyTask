import { useState, useEffect } from 'react';

export const useThemeSwitch = () => {
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        const test = localStorage.getItem('theme');
        if (test) {
            setTheme(test);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme };
};
