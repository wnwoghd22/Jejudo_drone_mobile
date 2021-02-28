import React, { useContext, useState, useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import Styled from 'styled-components/native';

import { NoticeContext } from '@src/Context/Notice';
import Loading from '@src/Screens/Loading';

const Container = Styled.View`
    padding: 32px;
`;

const Title = Styled.Text``;
const Writer = Styled.Text``;
const Date = Styled.Text``;
const Body = Styled.Text``;

type routeProp = RouteProp<NoticePageParamList, 'Notice'>;

interface Props {
    route: routeProp;
}

const Notice = ({ route } : Props) => {
    const {id} = route.params;
    const {fetchNotice, notice} = useContext<INoticeContext>(NoticeContext);
    const [ content, setContent ] = useState<INotice | undefined>(undefined);

    useEffect(() => {
        console.log(id);
        fetchNotice(id);
    }, []);

    useEffect(() => {
        setContent(notice);
        console.log(notice);
    }, [notice]);

    return content !== undefined ? (
        <Container>
            <Title>{content.title}</Title>
            <Writer>{content.writer.name}</Writer>
            <Date>{content.date.toString()}</Date>
            <Body>{content.body}</Body>
        </Container>
    ) : (
    <Loading/>
    );
}

export default Notice;