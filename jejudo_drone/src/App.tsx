import React from 'react';
import { StatusBar } from 'react-native';

import Navigator from '@src/Screens/Navigator';
import { UserContextProvider } from '@src/Context/UserData';
import { NoticeContextProvider } from '@src/Context/Notice';
import { ScheduleContextProvider } from '@src/Context/Schedule';

interface Props {}

const App = ({} : Props) => {
  return (
    <UserContextProvider>
      <NoticeContextProvider>
        <ScheduleContextProvider>
          <StatusBar barStyle = "default" />
          <Navigator />
        </ScheduleContextProvider>
      </NoticeContextProvider>
    </UserContextProvider>
  );
};

export default App;
