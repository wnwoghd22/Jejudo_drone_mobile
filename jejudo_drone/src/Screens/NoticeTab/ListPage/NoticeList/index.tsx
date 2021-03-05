import React, { useContext, useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import ListItem from './ListItem';
import { NoticeContext } from '@src/Context/Notice';

const ListContainer = Styled.View``;
const Text = Styled.Text``;

interface Props {
    navigation;
}

const NoticeList = ({ navigation } : Props) => {
    const {list} = useContext<INoticeContext>(NoticeContext);
    const [ noticeList, setNoticeList ] = useState<Array<INotice>>([]);

    useEffect(() => {
        setNoticeList(list);
    }, [list]);

    return (
        <ListContainer>
            { noticeList.length !== 0 ? 
                <FlatList
                    data = {noticeList}
                    keyExtractor = {(item, index) => item.id}
                    renderItem = {({item, index}) => (
                        <ListItem 
                            content = {item}
                            navigation = {navigation}
                        />
                    )}
                /> :
                <Text>공지사항이 없습니다.</Text>
            }
        </ListContainer>
    );
}

export default NoticeList;