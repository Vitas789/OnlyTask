import { AppProps } from 'next/app';
import { SwitchTransition, Transition } from 'react-transition-group';
import GlobalStyle from '@/style/globalStyles';
import '@/style/fonts.css';
import ScrollBarProvider from '@/context/ScrollBarContext';
import { RecoilRoot } from 'recoil';
import 'swiper/css';
import { SWRConfig } from 'swr';
import fetcher from '@/lib/fetcher';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '@/style/themes';
import { useThemeSwitch } from '@/hooks/useThemeSwitch';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const { asPath } = router;
    const { theme, setTheme } = useThemeSwitch();

    return (
        <RecoilRoot>
            <SWRConfig value={{ fetcher }}>
                <ScrollBarProvider>
                    <GlobalStyle theme={theme == 'light' ? LightTheme : DarkTheme} />
                    <SwitchTransition>
                        <Transition key={asPath} timeout={600}>
                            <ThemeContext.Provider value={{ theme, setTheme }}>
                                <ThemeProvider theme={theme == 'light' ? LightTheme : DarkTheme}>
                                    <Component {...pageProps} />
                                </ThemeProvider>
                            </ThemeContext.Provider>
                        </Transition>
                    </SwitchTransition>
                </ScrollBarProvider>
            </SWRConfig>
        </RecoilRoot>
    );
};

export default MyApp;
