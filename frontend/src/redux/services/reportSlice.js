import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config/api";

export const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getBookingReport: builder.query({
      query: (period = "7days") => `/reports/bookings?period=${period}`,
    }),

    getAllReports: builder.query({
      query: () => "/reports",
    }),
  }),
});

export const { useGetBookingReportQuery, useGetAllReportsQuery } = reportApi;
