import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { baseApiUrl } from 'shared/lib/ClassNames/ApiConfig/ApiConfig'


export const userApi =  createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseApiUrl}`,
        headers: {
            'Content-Type': 'application/json'
        },
    }),
    endpoints: (build) => ({
        createToken: build.mutation({
            query: (data) => ({
                url: '/auth/jwt/create/',
                method: 'POST',
                body: JSON.stringify(data)
            })
        }),
        refreshToken: build.mutation({
            query: (data) => ({
                url: '/auth/jwt/refresh/',
                method: 'POST',
                body: JSON.stringify(data)
            })
        }),
        registerUser: build.mutation({
            query: (data) => ({
                url: '/v1/user/create/',
                method: 'POST',
                body: JSON.stringify(data)
            })
        }),
        fetchUserDetail: build.mutation({
            query: (token) => ({
                url: '/v1/user',
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
    })
})