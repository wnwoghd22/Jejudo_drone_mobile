type LoginParamList = {
    Login: undefined;
    SignUp: undefined;
}

/**
 * ParamList for MainNavigator (DrawerNavigator)
 */
type MainPageParamList = {
    Main: undefined;
    Account: undefined;
    Notice: undefined;
    Schedule: undefined;
}

type MainTabParamList = {
    Main: undefined;
}

type NoticePageParamList = {
    NoticeList: undefined;
    Notice: {
        id: string;
    };
    PostPage: undefined; 
}

type ScheduleParamList = {
    MySchedule: undefined,
    Calendar: undefined;
    Part: {
        date: string;
    }
}