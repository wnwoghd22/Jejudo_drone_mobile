import React, { useContext, useLayoutEffect } from 'react';
import NavigationProp from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { UserContext } from '@src/Context/UserData';

import ListPage from './ListPage';
import Notice from './Notice';

const Stack = createStackNavigator();

type NaviProp = DrawerNavigationProp<MainPageParamList, 'Notice'>;
interface Props {
    navigation: NaviProp;
}

const NoticeTab = ({navigation} : Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = 'NoticeList'
                component = {ListPage}
                options = {{
                    title: "공지사항"
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