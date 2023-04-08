import React, { useEffect, useState } from 'react';
import { Container, WeatherBody, WeatherFooter, WeatherHeader } from './WeatherWidget.styled';
import LocationArrow from '../../../icons/location-arrow.svg';
import RainIcon from '../../../icons/rainy.svg';
import CloudIcon from '../../../icons/cloud.svg';
import useSWR from 'swr';
import Loader from '@/components/common/Loader/Loader';
import { getWeatherFetcher } from '@/lib/api';
interface WeatherWidgetProps {
    /* Component props */
}

const WeatherWidget: React.FC<WeatherWidgetProps> = () => {
    const [currentWeather, setCurrentWeather] = useState<any>([]);
    const API = 'cf0fb975d915c2a3c341e4965b6c219d';
    const { data, error } = useSWR(
        `http://api.openweathermap.org/data/2.5/forecast?q=Sochi&cnt=4&appid=${API}&units=metric&lang=ru`,
        getWeatherFetcher
    );
    const isLoading = !data && !error;

    const formatTime = (item: any) => {
        return +item.dt_txt.split(' ')[1].split(':')[0];
    };

    useEffect(() => {
        if (data?.list) {
            setCurrentWeather([...data.list]);
        }
    }, [data]);

    if (isLoading)
        return (
            <Container>
                <Loader />
            </Container>
        );

    return (
        <Container>
            <WeatherHeader>
                <div>
                    <LocationArrow />
                    <span>Погода в Сочи</span>
                </div>
                <p>Пятница, 31 марта</p>
            </WeatherHeader>
            <WeatherBody>
                <div>
                    {currentWeather[0]?.weather[0].main === 'Rain' ? <RainIcon /> : <CloudIcon />}
                    <span className="temp">+{currentWeather[0] && Math.round(currentWeather[0].main.temp)}°</span>
                </div>
                <p>Дождь</p>
                <p>Ощущается как +6°</p>
            </WeatherBody>
            <WeatherFooter>
                {currentWeather.slice(1).map((item: any, index: number) => (
                    <div key={index}>
                        <p>{`В ${formatTime(item)}:00`}</p>
                        <div>
                            {item.weather[0].main === 'Rain' ? <RainIcon /> : <CloudIcon />}
                            <span className="temp">+{Math.floor(item.main.temp)}°</span>
                        </div>
                    </div>
                ))}
            </WeatherFooter>
        </Container>
    );
};

export default WeatherWidget;
