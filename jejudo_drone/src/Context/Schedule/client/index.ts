import { AxiosResponse, CancelToken } from 'axios';
import { instance } from '@src/Context/clientConfig'

const postStudentToList = (date: IDate, part: string, payload: {key: string, name: string, }, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ result: string }>> => {
    return instance.post(`/schedule/${date.year}/${date.month}/${date.date}/${part}`, payload, {
        cancelToken
    });
};
const postScheduletoAccount = (key: string, payload: ISchedule, params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ result: string }>> => {
    return instance.post(`/accounts/${key}/schedule`, payload, {
        params,
        cancelToken
    });
}

const fetchScheduleList = (params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ schedule: ISchedule[] }>> => {
    return instance.get(`/schedule`, {
        params,
        cancelToken
    });
};
const fetchStudentsList = (date: IDate, part: string, params = {}, cancelToken = null) :
Promise<AxiosResponse<{ list: IUser[] }>> => {
    return instance.get(`/schedule/${date.year}/${date.month}/${date.date}/${part}`, {
        params,
        cancelToken
    });
};

const fetchSchedulefromAccount = (key: string, params = {}, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ schedule: ISchedule[] }>> => {
    return instance.get(`/accounts/${key}/schedule`, {
        params,
        cancelToken
    });
}
const cancelScheduleOfAccount = (key: string, id: string, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ result: string }>> => {
    return instance.delete(`/accounts/${key}/schedule/${id}`, {
        cancelToken
    });
}
const deleteStudentOfSchedule = (date: IDate, part: string, key: string, cancelToken: CancelToken = null) :
Promise<AxiosResponse<{ result: string }>> => {
    return instance.delete(`schedule/${date.year}/${date.month}/${date.date}/${part}/${key}`, {
        cancelToken
    });
}


export { postScheduletoAccount, postStudentToList,
    fetchScheduleList, fetchStudentsList, fetchSchedulefromAccount,
    cancelScheduleOfAccount, deleteStudentOfSchedule }