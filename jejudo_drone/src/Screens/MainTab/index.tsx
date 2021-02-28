import React, { useContext, useState, useLayoutEffect } from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';

import Input from '@src/Components/Input';
import Button from '@src/Components/Button';

import Styled from 'styled-components/native';

import { UserContext } from '@src/Context/UserData';
import MenuButton from '@src/Components/Drawer/MenuButton';

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

type NavigationProp = DrawerNavigationProp<MainPageParamList, 'Main'>;
interface Props {
    navigation: NavigationProp;
}

const MainPage = ({ navigation } : Props) => {
    const {user, logout} = useContext<IUserContext>(UserContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <MenuButton navigation = {navigation}/>
            ),
        });
        console.log('button created');
    }, []);

    return (
        <Container>
            <FormContainer>
                <StyledText
                    onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
                >{user.name}</StyledText>
            </FormContainer>
        </Container>
    );
}

export default MainPage;