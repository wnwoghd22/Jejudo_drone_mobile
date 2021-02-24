interface IUser {
    id: string;
    name: string;
    authority: string;

    phoneNum?: string;
    curriculum?: string;
    schedule?: Date[];
}

interface IUserContext {
    isLoading: boolean;
    user: IUser | undefined ;
    login: (email: string, password: string) => void;
    getUser: () => void;
    getUserList?: () => void;
    logout: () => void;
}