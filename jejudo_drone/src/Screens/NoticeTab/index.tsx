import React, { useContext, useLayoutEffect } from 'react';

import { Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import NavigationProp from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { UserContext } from '@src/Context/UserData';

import ListPage from './ListPage';
import Notice from './Notice';

import MenuButton from '@src/Components/Drawer/MenuButton';

const Stack = createStackNavigator();

type NaviProp = DrawerNavigationProp<MainPageParamList, 'Notice'>;
interface Props {
    navigation: NaviProp;
}

const NoticeTab = ({navigation} : Props) => {
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <MenuButton navigation = {navigation}/>
            ),
        });
        console.log('button created');
    }, []);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name = 'NoticeList'
                component = {ListPage}
                options = {{
                    title: "공지사항",
                    headerRight: () => (
                        //<MenuButton navigation = {navigation}/>
                        <Button
                            title = "메뉴"
                            onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
                        />
                    ),
                }}
            />
            <Stack.Screen 
                name = 'Notice'
                component = {Notice}
            />
        </Stack.Navigator>
    );
}

export default NoticeTab;