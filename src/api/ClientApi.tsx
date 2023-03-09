import { create } from "apisauce";

export const baseUrl = 'http://192.168.1.43:3005/'

const apiClient = create({
    baseURL: baseUrl,
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})

export default apiClient