import React, { useState, createContext, useEffect } from 'react';
import * as Client from './client';
import  firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext : IUserContext = {
    isLoading: false,
    user: undefined,
    login: (email: string, password: string) => {},
    getUser: () => {},
    logout: () => {},
}

const androidConfig = {
    clientId: "675146639727-uf9ulmeiea695517d5lb224eufs44f2e.apps.googleusercontent.com",
    appId: "1:675146639727:android:5b591902fc18844cb3209a",
    apiKey: "AIzaSyDH4aQCY-LCAA3Gwo4HbWDlJUoDHYXKJPo", 
    databaseURL: "https://jejudo-drone-prototype-default-rtdb.firebaseio.com",
    storageBucket: "jejudo-drone-prototype.appspot.com", 
    projectId: "jejudo-drone-prototype",
  
    persistence: true,
};

const firebaseApp = firebase.initializeApp(androidConfig);

const auth = firebase.auth();
const UserContext = createContext(defaultContext);

interface Props {
    children : JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({ children } : Props) => {
    const [ user , setUser ] = useState<IUser | undefined>(undefined);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const login = (email: string, password: string) : void => {
        auth.signInWithEmailAndPassword(email, password).then(result => {
            if(result) {
                AsyncStorage.setItem('token', result.user.toJSON().toString()).then(() => {
                    Client.fetchAccount(result.user.uid).then(response => { 
                        let account = response.data.account;
                        let data = {
                            id: result.user.uid,
                            name: account.name,
                            authority: account.authority,
                        }  as IUser;
                        setUser(data);
                        AsyncStorage.setItem('user', JSON.stringify(data));
                    })

                    setIsLoading(true);
                })
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const getUser = () : void => {
        AsyncStorage.getItem('user').then(value => {
            if(value) {
                console.log(value);
                let data = JSON.parse(value) as IUser;
                setUser(data);
                console.log('loaded!');
            }
            setIsLoading(true);
        }).catch(err => {
            console.log(err);
        });
    }

    const logout = () : void => {
        AsyncStorage.removeItem('token');
        setUser(undefined);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <UserContext.Provider
            value = {{
                isLoading,
                user,
                login,
                getUser,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }