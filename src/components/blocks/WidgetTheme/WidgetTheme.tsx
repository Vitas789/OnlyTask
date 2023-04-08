import React, { useContext } from 'react';
import { Container, WidgetThemeSwitcher } from './WidgetTheme.styled';
import { ThemeContext } from 'styled-components';

interface WidgetThemeProps {
    /* Component props */
}

const WidgetTheme: React.FC<WidgetThemeProps> = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <Container>
            <span>Переключение темы</span>
            <WidgetThemeSwitcher>
                <p>{theme === 'light' ? 'Светлая' : 'Темная'}</p>
                <div>
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={theme === 'light' ? false : true}
                        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    />
                    <span className="thumb"></span>
                </div>
            </WidgetThemeSwitcher>
        </Container>
    );
};

export default WidgetTheme;
