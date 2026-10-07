import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config/api";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/payhere`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Fetch payment hash from backend
    getPaymentHash: builder.mutation({
      query: (booking) => ({
        url: "/hash",
        method: "POST",
        body: booking,
      }),
    }),
  }),
});

export const { useGetPaymentHashMutation } = paymentApi;
