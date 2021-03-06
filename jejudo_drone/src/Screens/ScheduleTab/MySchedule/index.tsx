import React, { useContext, useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Styled from 'styled-components/native';

import { ScheduleContext } from '@src/Context/Schedule';

import Button from '@src/Components/Button';

import Loading from '@src/Screens/Loading';
import ListItem from './ListItem';

const Container = Styled.View``;

type NavigationProp = StackNavigationProp<ScheduleParamList, 'MySchedule'>;

interface Props {
    navigation: NavigationProp;
}

const MySchedule = ({ navigation } : Props) => {
    const {scheduleList} = useContext<IScheduleContext>(ScheduleContext);
    const [ contentList, setContentList ] = useState<Array<ISchedule> | undefined>(undefined);

    useEffect(() => {
        if (scheduleList !== undefined) {
            setContentList(scheduleList);
        }
    }, [scheduleList]);

    if (contentList === undefined) {
        return <Loading/>;
    }

    return (
        <Container>
            <FlatList
                data = {contentList}
                keyExtractor = {(item, index) => item.id}
                renderItem = {({item, index}) => (
                    <ListItem 
                        content = {item}
                    />
                )}
            />
            <Button
                label = "신청"
                onPress = {() => {
                    navigation.navigate('Calendar');
                }}
            />
        </Container>
    );
}

export default MySchedule;