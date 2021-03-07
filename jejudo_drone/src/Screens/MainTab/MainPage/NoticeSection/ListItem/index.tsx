import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View``;
const Title = Styled.Text``;
const InnerText = Styled.Text``;

interface Props {
    data: INotice;
}

const ListItem = ({data} : Props) => {
    return (
        <Container>
            <Title>{data.title}</Title>
            <InnerText>{data.date}</InnerText>
        </Container>
    );
}

export default ListItem;