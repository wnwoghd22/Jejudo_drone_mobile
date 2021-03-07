import React, { useContext, useLayoutEffect } from 'react';
import NavigationProp from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { UserContext } from '@src/Context/UserData';

import Loading from '@src/Screens/Loading';
import Login from '@src/Screens/Login';
import MainTab from '@src/Screens/MainTab';
import NoticeTab from '@src/Screens/NoticeTab';
import ScheduleTab from '@src/Screens/ScheduleTab';

import DrawerMenu from '@src/Components/Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigator = () => {

    useLayoutEffect(() => {

    })

    return (
        <Drawer.Navigator
            drawerPosition = "right"
            drawerType = "slide"
            drawerContent = {props => <DrawerMenu {...props}/>}
        >
            <Drawer.Screen name = 'Main' component = {MainTab} />
            <Drawer.Screen name = 'Notice' component = {NoticeTab} />
            <Drawer.Screen name = 'Schedule' component = {ScheduleTab} />
        </Drawer.Navigator>
    )
}

const LoginNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = 'login' component = {Login} />
            <Stack.Screen name = 'SignIn' component = {() => <></>}/>
        </Stack.Navigator>
    )
}

export default () => {
    const {isLoading, user} = useContext<IUserContext>(UserContext);

    if (isLoading === false) {
        return <Loading/>;
    }

    return (
        <NavigationContainer>
            { user ? <MainNavigator/> : <LoginNavigator/> }
        </NavigationContainer>
    )
}