import React, { useContext } from 'react';
import { Container, WidgetThemeSwitcher } from './WidgetTheme.styled';
import { ThemeContext } from 'styled-components';

interface WidgetThemeProps {
    /* Component props */
}

const WidgetTheme: React.FC<WidgetThemeProps> = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const onChange = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <Container>
            <span>Переключение темы</span>
            <WidgetThemeSwitcher>
                <p>{theme === 'light' ? 'Светлая' : 'Темная'}</p>
                <div>
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={theme !== 'light'}
                        onChange={onChange}
                    />
                    <span className="thumb"/>
                </div>
            </WidgetThemeSwitcher>
        </Container>
    );
};

export default WidgetTheme;
