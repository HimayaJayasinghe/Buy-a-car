import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../config/api';

export const authApi = createApi({

    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({

        baseUrl: API_BASE_URL,
        
    }),

    endpoints: (builder) => ({

        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),

        register: builder.mutation({

            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        
    }),
});

export const {

    useLoginMutation,
    useRegisterMutation,
    
} = authApi;