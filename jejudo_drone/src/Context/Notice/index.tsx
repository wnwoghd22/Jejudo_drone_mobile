import React, { createContext, useState, useEffect } from 'react';
import * as Client from './client';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext : INoticeContext = {
    list: undefined,
    notice: undefined,
    isLoading: false,
    fetchList: () => {},
    getList: () => {},
    fetchNotice: (id: string) => {},
    postNotice: (payload: INotice) => {},
    deleteNotice: (id: string) => {},
}

const NoticeContext = createContext<INoticeContext>(defaultContext);

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const NoticeContextProvider = ({ children } : Props) => {
    const [ noticeList, setNoticeList ] = useState<Array<INotice>>([]);
    const [ notice, setNotice ] = useState<INotice | undefined>(undefined);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const fetchList = () : void => {
        Client.fetchNoticeList().then(response => {
            if (response.data.announcements) {
                setNoticeList(response.data.announcements);
                AsyncStorage.setItem('noticeList', noticeList.toString());
                setIsLoading(true);
            } else {
                setIsLoading(true);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const getList = () : void => {
        AsyncStorage.getItem('noticeList').then(result => {
            setNoticeList(JSON.parse(result));
        })
    }

    const fetchNotice = (id: string) : void => {
        Client.fetchNotice(id).then(response => {
            if (response.data.content) {
                setNotice(response.data.content);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const postNotice = (payload: INotice) : void => {
        Client.postNotice(payload);
    }

    const deleteNotice = (id: string) : void => {
        Client.deleteNotice(id);
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <NoticeContext.Provider
            value = {{
                isLoading,
                list : noticeList,
                notice,
                fetchList,
                getList,
                fetchNotice,
                postNotice,
                deleteNotice,
            }}
        >
            {children}
        </NoticeContext.Provider>
    );
}

export default NoticeContextProvider;