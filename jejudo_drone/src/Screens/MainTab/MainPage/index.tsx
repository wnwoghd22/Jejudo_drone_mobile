import React, { useContext, useState, useLayoutEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import Input from '@src/Components/Input';
import Button from '@src/Components/Button';

import Styled from 'styled-components/native';

import { UserContext } from '@src/Context/UserData';
import MenuButton from '@src/Components/Drawer/MenuButton';

import NoticeSection from './NoticeSection';
import WeatherSection from './WeatherSection';

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

const MainPage = ({ navigation } : Props) => {
    const {user} = useContext<IUserContext>(UserContext);
                  
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'JEJUDO DRONE',
            headerRight: () => (
                <MenuButton navigation = {navigation}/>
            ),
        });
        console.log('button created');
    }, []);

    return (
        <Container>
            <FormContainer>
                <StyledText>{user.name}</StyledText>
                <NoticeSection/>
                <WeatherSection onPress = {() => {
                    navigation.navigate('Weather');
                }}/>
            </FormContainer>
        </Container>
    );
}

export default MainPage;