import React, { useEffect, useState } from 'react';
import { Container, WeatherLoader, WeatherBody, WeatherFooter, WeatherHeader } from './WeatherWidget.styled';
import LocationArrow from '../../../icons/location-arrow.svg';
import RainIcon from '../../../icons/rainy.svg';
import CloudIcon from '../../../icons/cloud.svg';
import useSWR from 'swr';
import { formatTime, formatWeather, getDayName, getMonthName } from '@/helpers';
import fetcher from '@/lib/fetcher';
interface WeatherWidgetProps {
    /* Component props */
}

const WeatherWidget: React.FC<WeatherWidgetProps> = () => {
    const [currentWeather, setCurrentWeather] = useState<any>([]);
    const date = new Date().getDate();
    const API = 'cf0fb975d915c2a3c341e4965b6c219d';
    const { data, error } = useSWR<any>(
        `http://api.openweathermap.org/data/2.5/forecast?q=Sochi&cnt=4&appid=${API}&units=metric&lang=ru`,
        fetcher
    );
    const isLoading = !data && !error;

    useEffect(() => {
        if (data?.list) {
            setCurrentWeather([...data.list]);
        }
    }, [data]);

    if (isLoading)
        return (
            <Container>
                <WeatherLoader />
            </Container>
        );

    return (
        <Container>
            <WeatherHeader>
                <div>
                    <LocationArrow />
                    <span>Погода в Сочи</span>
                </div>
                <p>
                    {getDayName()}, {date} {getMonthName()}
                </p>
            </WeatherHeader>
            {currentWeather[0] && (
                <WeatherBody>
                    <div>
                        {currentWeather[0]?.weather[0].main === 'Rain' ? <RainIcon /> : <CloudIcon />}
                        <span className="temp">{currentWeather[0] && formatWeather(currentWeather[0].main.temp)}</span>
                    </div>
                    <div>
                        <p>{currentWeather[0].weather[0].description}</p>
                        <p>Ощущается как {formatWeather(currentWeather[0].main.feels_like)}</p>
                    </div>
                </WeatherBody>
            )}
            <WeatherFooter>
                {currentWeather.slice(1).map((item: any, index: number) => (
                    <div key={index}>
                        <p>{`В ${formatTime(item)}:00`}</p>
                        <div>
                            {item.weather[0].main === 'Rain' ? <RainIcon /> : <CloudIcon />}
                            <span className="temp">{formatWeather(item.main.temp)}</span>
                        </div>
                    </div>
                ))}
            </WeatherFooter>
        </Container>
    );
};

export default WeatherWidget;
