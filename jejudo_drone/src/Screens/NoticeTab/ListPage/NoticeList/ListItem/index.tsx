import React, { useState,useEffect } from 'react';
import { SegmentedControlIOSComponent } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    flex: 1;
`;
const Title = Styled.Text`
    font-weight: bold;
`;
const InnerText = Styled.Text``;

interface Props {
    content: INotice;
    navigation;
}

const ListItem = ({ content, navigation } : Props) => {
    const [ notice, setNotice ] = useState<INotice | undefined>(undefined);

    const onPress = () => {
        console.log('notice: ', notice);
        let id = notice.id;
        console.log('id: ', id);
        navigation.navigate('Notice', {id});
    }

    useEffect(() => {
        setNotice(content);
        console.log(content);
    }, []);

    return notice !== undefined ? (     
            <Container onPress = {onPress}>
                <Title>{notice.title}</Title>
                <InnerText>{notice.writer.name}</InnerText>
                <InnerText>{notice.date.toString()}</InnerText>
            </Container>
        ) : (
            <Container/>
        );
}

export default ListItem;