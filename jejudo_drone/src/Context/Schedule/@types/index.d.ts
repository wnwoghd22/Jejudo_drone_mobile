interface IDate {
    year: number;
    month: number;
    date: number;
}

interface ISchedule {
    id?: string;
    date?: IDate;
    part?: string;
}

/**
 * 특정 수업의 학생 수, 명단 등을 저장
 */
interface IDayInfo {
    
}

interface IScheduleContext {
    isLoading: boolean;
    /**
     * schedule of user.
     */
    scheduleList: ISchedule[] | undefined;
    fetchScheduleList: () => void;
    postSchedule: (time: ISchedule) => void;
    /**
     * delete schedule of user.
     */
    cancelSchedule: (id: string, time: ISchedule) => void;

    dayInfo?: IDayInfo | undefined;

    
}