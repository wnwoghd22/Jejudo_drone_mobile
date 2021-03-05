interface INotice {
    id?: string;
    title?: string;
    date?: Date;
    writer?: {
        id?: string
        name?: string
    };
    body?: string;
}

interface INoticeContext {
    isLoading: boolean;
    list: INotice[] | undefined;
    notice: INotice | undefined;
    fetchList: () => void;
    fetchNotice: (id: string) => void;
    postNotice: (payload: INotice) => void;
    deleteNotice: (id: string) => void;
}