import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import {
    ScrollView,
    FlatList,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import Styled from 'styled-components/native';

import { ScheduleContext } from '@src/Context/Schedule';

import Button from '@src/Components/Button';

import ScheduleList from './ScheduleList';

import MenuButton from '@src/Components/Drawer';

const ListContainer = Styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Container = Styled.TouchableOpacity`
    padding: 8px;
`;
const Icon = Styled.Image``;

type NavigationProp = StackNavigationProp<ScheduleParamList, 'MySchedule'>;

interface Props {
    navigation: NavigationProp;
}

const MySchedule = ({ navigation } : Props) => {
   
    useLayoutEffect(() => {
        navigation.setOptions({
            title: '나의 일정',
            headerRight: () => (
                <Container
                    onPress = {() => {
                            navigation.dispatch(DrawerActions.openDrawer());
                    }}
                >
                    <Icon source = {require('@src/Assets/Images/ic_menu.png')}/>
                </Container>
            ),
        });
    }, []);

    return (
        <ListContainer>
            <ScrollView style = {{
                width: '100%',
                
            }}>
                <ScheduleList navigation = {navigation}/>
            </ScrollView>
            <Button
                style = {{

                }}
                label = "신청"
                onPress = {() => {
                    navigation.navigate('Calendar');
                }}
            />
        </ListContainer>
    );
}

export default MySchedule;