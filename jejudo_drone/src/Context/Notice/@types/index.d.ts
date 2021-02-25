interface INotice {
    id?: string;
    title?: string;
    date?: Date;
    writer?: {
        id?: string
        name?: String
    };
    body?: string;
}

interface INoticeContext {
    isLoading: boolean;
    list: INotice[] | undefined;
    notice: INotice | undefined;
    fetchList: () => void;
    getList: () => void;
    fetchNotice: (id: string) => void;
    postNotice: (payload: INotice) => void;
    deleteNotice: (id: string) => void;
}