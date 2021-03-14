import React, { createContext, useEffect, useState } from 'react';
import * as Client from './client';

const defaultContext : IWeatherContext = {
    isLoading: false,
    weather: undefined,
    fetchWeather: () => {},
    refresh: () => {},
}

const WeatherContext = createContext<IWeatherContext>(defaultContext);

interface Props {
    children : JSX.Element | Array<JSX.Element>;
}

const WeatherContextProvider = ({ children } : Props) => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ weather, setWeather ] = useState<IWeather | undefined>(undefined);

    const fetchWeather = () => {
        setIsLoading(false);
        Client.fetchWeather().then(response => {
            setWeather(response);
            setIsLoading(true);
        })
    }

    const refresh = () => {
        fetchWeather();
    }

    useEffect(() => {
        fetchWeather();
    }, []);

    console.log(weather);

    return (
        <WeatherContext.Provider
            value = {{
                isLoading,
                weather,
                fetchWeather,
                refresh,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
}

export { WeatherContext, WeatherContextProvider }