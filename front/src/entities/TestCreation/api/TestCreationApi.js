import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { baseApiUrl } from 'shared/lib/ClassNames/ApiConfig/ApiConfig'


export const testCreationApi =  createApi({
    reducerPath: 'testCreationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseApiUrl}/v1/`,
        headers: {
            'Content-Type': 'application/json'
        },
    prepareHeaders: (headers, { getState }) => {
        const token = getState().user.access_token
        headers.set('Authorization', `Bearer ${token}`)
        return headers
    },
    }),
    endpoints: (build) => ({
        getQuestion: build.mutation({
            query: (data) => ({
                url: 'task/',
                method: 'GET',
                params: data
            }),

        }),  
        getAllQuestions: build.query({
            query: (data) => ({
                url: 'tasks/',
                method: 'GET',
                params: data
            }),
        }),  
        getAllStages: build.query({
            query: () => ({
                url: 'stages/',
                method: 'GET',
             }),
        }),  
    }),
})
