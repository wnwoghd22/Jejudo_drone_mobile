import React from 'react';
import { Calendar } from 'react-native-calendars';
import { StackNavigationProp } from '@react-navigation/stack';
import Styled from 'styled-components/native';

const Container = Styled.View``;

type NavigationProp = StackNavigationProp<ScheduleParamList, 'Calendar'>;

interface Props {
    navigation: NavigationProp;
}

const CalendarPage = ({ navigation } : Props) => {
    

    return (
        <Container>
            <Calendar
                onDayPress = {(day) => {
                    console.log('Pressed : ', day.dateString);
                    navigation.navigate('Part', {date: day.dateString});
                }}
            />
        </Container>
    );
}

export default CalendarPage;