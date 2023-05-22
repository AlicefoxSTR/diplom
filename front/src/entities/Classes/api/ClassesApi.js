import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { baseApiUrl } from 'shared/lib/ClassNames/ApiConfig/ApiConfig'
import { ClassesSlice } from '../redux/ClassesSlice'


export const classesApi =  createApi({
    reducerPath: 'classesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseApiUrl}/v1/`,
        headers: {
            'Content-Type': 'application/json'
        },
    prepareHeaders: (headers, { getState }) => {
        const token = getState().user.access_token
        headers.set('Authorization', `Bearer ${token}`)
        return headers
    }
    }),
    tagTypes: ['Class'],
    endpoints: (build) => ({
        fetchClassRooms: build.query({
            query: () => ({
                url: 'classes/',
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try {
                    const { data } = await queryFulfilled
                    dispatch(ClassesSlice.actions.setClasses(data[0].classes))
                }catch(error){}
            },
            providesTags: result => ['Class'],
        }),  
        saveClassRoom: build.mutation({
            query: (data) => ({
                url: '/classes/create/',
                method: 'POST',
                body: JSON.stringify(data)
            }),
            invalidatesTags:  ['Class']

        }),
        deleteClassRoom: build.mutation({
            query: (data) => ({
                url: `/classes/delete/`,
                method: 'DELETE',
                body: JSON.stringify(data)
            }),
            invalidatesTags:  ['Class']

        }),
        createStudent: build.mutation({
            query: (data) => ({
                url: '/classes/student/',
                method: 'POST',
                body: JSON.stringify(data)
            }),
            invalidatesTags:  ['Class']

        }),
        editStudent: build.mutation({
            query: (data) => ({
                url: `/classes/student/`,
                method: 'PATCH',
                body: JSON.stringify(data)
            }),
            invalidatesTags:  ['Class']

        }),
        deleteStudent: build.mutation({
            query: (data) => ({
                url: `/classes/student/`,
                method: 'DELETE',
                body: JSON.stringify(data)
            }),
            invalidatesTags:  ['Class']

        }),
        
    })
})