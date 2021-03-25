import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { NoticeContext } from '@src/Context/Notice';

import ListItem from './ListItem';

const NoticeContainer = Styled.View`
    width: 70%;
    height: 30%;
`;
const Header = Styled.View`
    width: 100%;
    flex: 1;
    flex-direction: row;
`;
const HeaderText = Styled.Text``;
const Button = Styled.TouchableOpacity``;

const NoticeSection = () => {
    const {list} = useContext<INoticeContext>(NoticeContext);

    return (
        <NoticeContainer>
            <Header>
               <HeaderText style = {{
                        width: '50%',
                    }}
                >공지사항</HeaderText>
               <Button style = {{  }}>
                   <HeaderText>자세히</HeaderText>
               </Button>
            </Header>
            <FlatList
                data = {list}
                renderItem = {({item, index}) => (
                    <ListItem data = {item}/>
                )}
            />
        </NoticeContainer>
    );
}

export default NoticeSection;