import React from 'react';
import { StatusBar } from 'react-native';

import Navigator from '@src/Screens/Navigator';
import { UserContextProvider } from '@src/Context/UserData';
import { NoticeContextProvider } from '@src/Context/Notice';

interface Props {}

const App = ({} : Props) => {
  return (
    <UserContextProvider>
      <NoticeContextProvider>
        <StatusBar barStyle = "default" />
        <Navigator />
      </NoticeContextProvider>
    </UserContextProvider>
  );
};

export default App;
