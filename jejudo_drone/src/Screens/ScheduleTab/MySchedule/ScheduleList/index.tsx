import React, { useContext, useState, useEffect } from 'react';
import {
    FlatList,
    Dimensions,
} from 'react-native';
import Styled from 'styled-components/native';

import ListItem from './ListItem';
import { ScheduleContext } from '@src/Context/Schedule';

const ListContainer = Styled.View`
    width: 100%;
`;
const Text = Styled.Text``;

interface Props {
    navigation;
}

const ScheduleList = ({ navigation } : Props) => {
    const {scheduleList} = useContext<IScheduleContext>(ScheduleContext);
    const [ list, setList ] = useState<Array<ISchedule>>([]);

    useEffect(() => {
        setList(scheduleList);
    }, [scheduleList]);

    return (
        <ListContainer>
            { list.length !== 0 ? 
                <FlatList
                    data = {list}
                    keyExtractor = {(item, index) => item.id}
                    renderItem = {({item, index}) => (
                        <ListItem 
                            content = {item}
                        />
                    )}
                /> :
                <Text>예약된 수업이 없습니다.</Text>
            }
        </ListContainer>
    );
}

export default ScheduleList;