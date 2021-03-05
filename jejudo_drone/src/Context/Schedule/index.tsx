import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Client from './client';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '@src/Context/UserData';

const defaultContext : IScheduleContext = {
    isLoading: false,
    scheduleList: undefined,
    fetchScheduleList: () => {},
    postSchedule: () => {},
    cancelSchedule: () => {},
}

const ScheduleContext = createContext<IScheduleContext>(defaultContext);

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const ScheduleContextProvider = ({ children } : Props) => {
    const {user} = useContext(UserContext);

    const [ scheduleList, setScheduleList ] = useState<Array<ISchedule> | undefined>(undefined);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const fetchScheduleList = () : void => {
        Client.fetchSchedulefromAccount(user.id).then(response => {
            if (response.data.schedule) {
                console.log(response.data.schedule);
                setScheduleList(response.data.schedule);
            }
            setIsLoading(true);
        }).catch(err => {
            console.log(err);
        })
    }

    const postSchedule = (time: ISchedule) : void => {
        Client.postScheduletoAccount(user.id, time).then(result => {
            if(result.data.result === "already exist") {
                Alert.alert("이미 신청되어 있습니다.");
            } else {
                Client.postStudentToList(time.date, time.part, user);
                Alert.alert("신청되었습니다.");
            }
        })
    }

    const cancelSchedule = (id: string, time: ISchedule) : void => {
        
        Client.cancelScheduleOfAccount(user.id, id);
        Client.deleteStudentOfSchedule(time.date, time.part, user.id);
        fetchScheduleList();
    }

    useEffect(() => {
        if(user !== undefined) {
            console.log('user loaded!');
            fetchScheduleList();
        }
    }, [user]);

    console.log(scheduleList);

    return (
        <ScheduleContext.Provider
            value = {{
                isLoading,
                scheduleList,
                fetchScheduleList,
                postSchedule,
                cancelSchedule,
            }}
        >
            {children}
        </ScheduleContext.Provider>
    );
}

export { ScheduleContext, ScheduleContextProvider }