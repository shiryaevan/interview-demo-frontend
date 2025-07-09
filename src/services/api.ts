import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { type LoginRequest, OpenAPI, type StatsResponse } from "@/api";
import { DefaultService } from "@/api/services/DefaultService";

const token = localStorage.getItem("token");
if (token) {
  OpenAPI.TOKEN = token;
}

OpenAPI.BASE = import.meta.env.PROD ? import.meta.env.VITE_API_URL : "";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, LoginRequest>({
      queryFn: async (body) => {
        try {
          const data = await DefaultService.postApiLogin(body);
          return { data };
        } catch (error: any) {
          return {
            error: error.body,
          };
        }
      },
    }),
    getStats: builder.query<StatsResponse, void>({
      queryFn: async () => {
        try {
          const data = await DefaultService.getApiStats();
          return { data };
        } catch (error: any) {
          return { error };
        }
      },
    }),
  }),
});

export const { useLoginMutation, useGetStatsQuery } = api;
