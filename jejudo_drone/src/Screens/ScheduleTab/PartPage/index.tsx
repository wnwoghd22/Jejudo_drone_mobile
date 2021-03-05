import React, { useContext, useEffect } from 'react';
import { FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Styled from 'styled-components/native';

import { ScheduleContext } from '@src/Context/Schedule';

import Button from '@src/Components/Button';

const Container = Styled.View`
    align-items: center;
`;

const DateText = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

type routeProp = RouteProp<ScheduleParamList, 'Part'>;
type navigationProp = StackNavigationProp<ScheduleParamList, 'Part'>;

interface Props {
    route: routeProp;
    navigation: navigationProp;
}

const PartPage = ({ route, navigation } : Props) => {
    const {date} = route.params;
    const {postSchedule} = useContext<IScheduleContext>(ScheduleContext);

    useEffect(() => {
        console.log(date);
    }, []);

    const Reserve = (part: string) : void => {
        let payload = {
            date: date,
            part: part,
        } as ISchedule;
        postSchedule(payload);
        navigation.navigate('MySchedule');
    }

    return (
        <Container>
            <DateText>
                {date}
            </DateText>
            <Button label = "오전" onPress = {() => Reserve('morning')} />
            <Button label = "점심시간" onPress = {() => Reserve('noon')} />
            <Button label = "오후" onPress = {() => Reserve('afternoon')} />
        </Container>
    );
}

export default PartPage;