import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { NoticeContext } from '@src/Context/Notice';

import ListItem from './ListItem';

const NoticeSection = () => {
    const {list} = useContext<INoticeContext>(NoticeContext);

    return (
        <FlatList
            data = {list}
            renderItem = {({item, index}) => (
                <ListItem data = {item}/>
            )}
        />
    );
}

export default NoticeSection;