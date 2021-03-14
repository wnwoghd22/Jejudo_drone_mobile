import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Styled from 'styled-components/native';

import { ScheduleContext } from '@src/Context/Schedule';

import Button from '@src/Components/Button';

import ScheduleList from './ScheduleList';

import MenuButton from '@src/Components/Drawer';

const ListContainer = Styled.View``;

type NavigationProp = StackNavigationProp<ScheduleParamList, 'MySchedule'>;

interface Props {
    navigation: NavigationProp;
}

const MySchedule = ({ navigation } : Props) => {
   
    useLayoutEffect(() => {
        navigation.setOptions({
            title: '나의 일정',
            headerRight: () => (
                <MenuButton navigation = {navigation}/>
            ),
        });
    }, []);

    return (
        <ListContainer>
            <ScheduleList navigation = {navigation}/>
            <Button
                label = "신청"
                onPress = {() => {
                    navigation.navigate('Calendar');
                }}
            />
        </ListContainer>
    );
}

export default MySchedule;