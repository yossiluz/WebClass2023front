import FormData from "form-data";

import apiClient from "./ClientApi";

import { URL_PATHS } from "../utils/constants";
import { iEditUser } from "../utils/types/@User";

const getUser = async (userId: string) => {
    return apiClient.get(`/${URL_PATHS.user}/${userId}`);
};

const editUserInfo = async (userId: string, userData: iEditUser) => {
    return apiClient.post(`/${URL_PATHS.user}/edit-user/${userId}`, userData);
};

const uploadUserImage = async (image: FormData) => {
    return apiClient.post(`/${URL_PATHS.file}/file`, image);
};

const userApi = {
    getUser,
    editUserInfo,
    uploadUserImage
};

export default userApi;


