import React, { createContext, useEffect, useState } from 'react';
import * as Client from './client';

const defaultContext : IWeatherContext = {
    isLoading: false,
    weather: undefined,
    fetchWeather: () => {},
}

const WeatherContext = createContext<IWeatherContext>(defaultContext);

interface Props {
    children : JSX.Element | Array<JSX.Element>;
}

const WeatherContextProvider = ({ children } : Props) => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ weather, setWeather ] = useState<IWeather | undefined>(undefined);

    const fetchWeather = () => Client.fetchWeather();

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <WeatherContext.Provider
            value = {{
                isLoading,
                weather,
                fetchWeather,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
}

export { WeatherContext, WeatherContextProvider }