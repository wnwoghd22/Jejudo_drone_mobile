import React, { useContext, useLayoutEffect } from 'react';

import { Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import NavigationProp from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { UserContext } from '@src/Context/UserData';

import MenuButton from '@src/Components/Drawer/MenuButton';

import MainPage from './MainPage';
import WeatherPage from './WeatherPage';

const Stack = createStackNavigator();

type NavigationProp = DrawerNavigationProp<MainPageParamList, 'Main'>;
interface Props {
    navigation: NavigationProp;
}


const MainTab = ({navigation} : Props) => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name = 'Main'
                component = {MainPage}
                options = {{
                    /*title: "JEJUDO DRONE",
                    headerRight: () => (
                        //<MenuButton navigation = {navigation}/>
                        <Button
                            title = "메뉴"
                            onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
                        />
                    ),*/
                }}
            />
            <Stack.Screen
                name = 'Weather'
                component = {WeatherPage}
                options = {{
                    title: "비행장 날씨",
                    /*headerRight: () => (
                        //<MenuButton navigation = {navigation}/>
                        <Button
                            title = "메뉴"
                            onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
                        />
                    ),*/
                }}
            />
        </Stack.Navigator>
    );
}

export default MainTab;