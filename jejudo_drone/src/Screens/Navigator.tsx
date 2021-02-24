import React, { createContext, useContext } from 'react';
import Title from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserContext } from '@src/Context/UserData'

import Login from '@src/Screens/Login';
import MainPage from '@src/Screens/MainPage';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = 'main'
                component = {MainPage}
            />
        </Stack.Navigator>
    )
}

const LoginNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = 'login'
                component = {Login}
            />
        </Stack.Navigator>
    )
}

export default () => {
    const {isLoading, user} = useContext<IUserContext>(UserContext);

    /*if (isLoading) {

    }*/

    return (
        <NavigationContainer>
            { user ? <MainNavigator/> : <LoginNavigator/> }
        </NavigationContainer>
    )
}