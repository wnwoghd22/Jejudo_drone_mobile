interface IWeather {
    /**
     * 강수확률
     */
    POP?: number;
    /**
     * 강수형태
     */
    PTY?: number;
    /**
     * 6시간 강수량 (mm)
     */
    R06?: number;
    /**
     * 습도
     */
    REH?: number;
    /**
     * 6시간 신적설량 (cm)
     */
    S06?: number;
    /**
     * 하늘 상태
     * 
     */
    SKY?: number;
}

interface IWeatherContext {
    isLoading: boolean;
    weather: IWeather | undefined;
    fetchWeather: () => void;
}