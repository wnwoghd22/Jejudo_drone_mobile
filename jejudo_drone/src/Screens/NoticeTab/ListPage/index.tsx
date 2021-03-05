import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Styled from 'styled-components/native';

import NoticeList from './NoticeList';

import MenuButton from '@src/Components/Drawer/MenuButton';

const ListContainer = Styled.View``;
const Text = Styled.Text``;

type NavigationProp = StackNavigationProp<NoticePageParamList, 'NoticeList'>;

interface Props {
    navigation: NavigationProp;
}

const ListPage = ({ navigation } : Props) => {

    return (
        <ListContainer>
            <NoticeList navigation = {navigation}/>
        </ListContainer>
    );
}

export default ListPage;