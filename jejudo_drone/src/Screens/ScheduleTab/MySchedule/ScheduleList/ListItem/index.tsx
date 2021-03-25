import React, { useState,useEffect } from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;

    border-width: 1;
    padding: 5px;
`;
const Title = Styled.Text`
    font-weight: bold;
`;
const InnerText = Styled.Text`
    flex: 1;
    text-align: center;
`;

const CancelButton = Styled.TouchableOpacity`
    align-self: flex-end;
    margin: 10px;
    background-color: skyblue;
`;

interface Props {
    content: ISchedule;
}

const ListItem = ({ content } : Props) => {
    const [ schedule, setSchedule ] = useState<ISchedule | undefined>(undefined);

    const onPress = () => {
        console.log('schedule : ', schedule);
    }

    useEffect(() => {
        setSchedule(content);
        console.log('content : ', content);
    }, []);

    return schedule !== undefined ? (     
            <Container onPress = {onPress}>
                <Title>{schedule.date.year}년 {schedule.date.month + 1}월 {schedule.date.date}일</Title>
                <InnerText>{
                    schedule.part === 'morning' ? '오전'
                    : schedule.part === 'noon' ? '점심시간'
                    : '오후'
                }</InnerText>
                <CancelButton>
                    <InnerText>
                        취소
                    </InnerText>
                </CancelButton>
            </Container>
        ) : (
            <Container/>
        );
}

export default ListItem;