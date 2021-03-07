import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import Styled from 'styled-components/native';

import Input from '@src/Components/Input';
import Button from '@src/Components/Button';
import MenuButton from '@src/Components/Drawer/MenuButton';

import { WeatherContext } from '@src/Context/Weather';

import Loading from '@src/Screens/Loading';

const Container = Styled.SafeAreaView`
    flex: 1;
`;
const FormContainer = Styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
const StyledText = Styled.Text``;

type NavigationProp = StackNavigationProp<MainTabParamList, 'Main'>;
interface Props {
    navigation: NavigationProp;
}

const WeatherPage = ({ navigation } : Props) => {
    const {isLoading, weather} = useContext<IWeatherContext>(WeatherContext);
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

    if (isLoading === false) {
        return (
            <Loading/>
        );
    }

    return weather !== undefined ? (
        <Container>
            <FormContainer>
                <StyledText>기온 : {weather.T1H}℃</StyledText>
                <StyledText>강수량 : {weather.RN1}mm</StyledText>
                <StyledText>강수형태 : {condition}</StyledText>
                <StyledText>습도 : {weather.REH}%</StyledText>
                <StyledText>풍향 : {weather.VEC}(deg)</StyledText>
                <StyledText>풍속 : {weather.WSD}m/s</StyledText>
                <StyledText>동서방향 : {weather.UUU}m/s</StyledText>
                <StyledText>남북방향 : {weather.VVV}m/s</StyledText>
            </FormContainer>
        </Container>
    ) : (
        <StyledText>날씨정보를 불러오는 데 실패했습니다.</StyledText>
    );
}

export default WeatherPage;