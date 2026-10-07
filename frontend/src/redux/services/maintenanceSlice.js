import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../config/api';

export const maintenanceApi = createApi({

    reducerPath: "maintenance",
    baseQuery: fetchBaseQuery({

        baseUrl: API_BASE_URL,
        prepareHeaders: (headers) => {

            const token = localStorage.getItem('token');
            if(token){
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),

    endpoints: (builder) => ({

        addMaintenance: builder.mutation({
            query: (data) => ({
                url: '/maintenance',
                method: 'POST',
                body: data,
            }),
        }),

        getMaintenance: builder.query({
            query: () => '/maintenance',
        }),

        getMaintenanceById: builder.query({
            query: (id) => `/maintenance/${id}`,
        }),

        updateMaintenance: builder.mutation({
            query: ({id, data}) => ({
                url: `/maintenance/${id}`,
                method: 'PUT',
                body: data,
            }),
        }),

        deleteMaintenance: builder.mutation({
            query: (id) => ({
                url: `/maintenance/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {

    useAddMaintenanceMutation,
    useGetMaintenanceQuery,
    useGetMaintenanceByIdQuery,
    useUpdateMaintenanceMutation,
    useDeleteMaintenanceMutation,

} = maintenanceApi;