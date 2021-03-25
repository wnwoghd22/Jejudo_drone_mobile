import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex-direction: row;
    align-items: center;
    padding: 5px;
`;
const Title = Styled.Text`
    align-self: flex-start;
    margin: 5px;
`;
const InnerText = Styled.Text`
    align-self: flex-end;
    margin: 5px;
`;

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