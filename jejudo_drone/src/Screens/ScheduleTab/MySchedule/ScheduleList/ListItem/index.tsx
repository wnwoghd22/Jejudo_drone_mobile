import React, { useState,useEffect } from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
`;
const Title = Styled.Text`
    font-weight: bold;
`;
const InnerText = Styled.Text``;

const CancelButton = Styled.TouchableOpacity``;

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
                <Title>{schedule.date}</Title>
                <InnerText>{schedule.part}</InnerText>
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