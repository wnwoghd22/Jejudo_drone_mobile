import React, { useContext, useLayoutEffect } from 'react';
import NavigationProp from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { UserContext } from '@src/Context/UserData';

import MySchedule from './MySchedule';
import CalendarPage from './Reservation';
import PartPage from './PartPage';

import MenuButton from '@src/Components/Drawer';

const Stack = createStackNavigator();

type NaviProp = DrawerNavigationProp<MainPageParamList, 'Schedule'>;
interface Props {
    navigation: NaviProp;
}

const ScheduleTab = ({navigation} : Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = 'MySchedule'
                component = {MySchedule}
            />
            <Stack.Screen
                name = 'Calendar'
                component = {CalendarPage}
                options = {{
                    title: "날짜 선택"
                }}
            />
            <Stack.Screen 
                name = 'Part'
                component = {PartPage}
                options = {{
                    title: "시간 선택"
                }}
            />
        </Stack.Navigator>
    );
}

export default ScheduleTab;