import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config/api";

export const emailApi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/send-email`, 
    // prepareHeaders: (headers) => {
    //   const token = localStorage.getItem("token"); 
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),

  endpoints: (builder) => ({

    createEmail: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});


export const {
  useCreateEmailMutation,
} = emailApi;
