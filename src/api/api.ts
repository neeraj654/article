// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = ' http://localhost:3001';

// const axiosInstance = axios.create({
// 	baseURL: `${BASEURL}`,
// });
// export const Axios = async (config: AxiosRequestConfig) => {
// 	try {
// 		const resp: AxiosResponse<any> = await axiosInstance(config);
// 		const data: any = resp.data;
// 		return data;
// 	} catch (error) {
// 		console.log('apierror', error);
// 	}
// };
export const flow1Api = createApi({
	reducerPath: 'flow1',
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	endpoints: (builder) => ({
		getAllPostsFromFlow1: builder.query({
			query: () => ({ url: 'flow1', method: 'GET' }),
		}),
	}),
});
export const { useGetAllPostsFromFlow1Query } = flow1Api;
