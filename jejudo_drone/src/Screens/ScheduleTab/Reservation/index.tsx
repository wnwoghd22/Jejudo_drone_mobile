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
                onDayPress = {date => {
                    console.log('Pressed : ', date);
                    navigation.navigate('Part', {
                        date: {  
                            date: date.day,
                            month: date.month - 1,
                            year: date.year,
                        } as IDate
                    } );
                }}
            />
        </Container>
    );
}

export default CalendarPage;