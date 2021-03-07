import React, { useContext, useState, useEffect } from 'react';
import Styled from 'styled-components/native';

import { WeatherContext } from '@src/Context/Weather';

const Container = Styled.View``;
const InnerText = Styled.Text``;

interface Props {
    onPress: () => void;
}

const WeatherSection = ({onPress} : Props) => {
    const {isLoading, weather, refresh} = useContext<IWeatherContext>(WeatherContext); 
    const [ condition, setCondition ] = useState<string>('');

    useEffect(() => {
        if( weather !== undefined) { 
            switch(weather.PTY) {
                case '0':
                    setCondition('정상(맑음 또는 흐림)');
                    break;
                case '1':
                    setCondition('비');
                    break;
                case '2':
                    setCondition('비/눈');
                    break;
                case '4':
                    setCondition('소나기');
                    break;
                case '6':
                    setCondition('빗방울/눈날림');
                    break;
                case '7':
                    setCondition('눈날림');
                    break;
            }
        }
    }, [weather]);

    if(isLoading === false) {
        return (
            <InnerText>
                로딩 중...
            </InnerText>
        )
    }

    return weather !== undefined ? (
        <Container>
            <InnerText onPress = {onPress}>풍속 : {weather.WSD}m/s</InnerText>
            <InnerText>{condition}</InnerText>
        </Container>
    ) : (
        <InnerText>날씨정보를 불러오는 데 실패했습니다.</InnerText>
    );
}

export default WeatherSection;