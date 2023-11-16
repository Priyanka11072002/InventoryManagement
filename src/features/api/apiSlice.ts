import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const emptySplitApi = createApi({
   reducerPath:"emptySplitApi",
  baseQuery:fetchBaseQuery({
    baseUrl:import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["Category", "Product", "Purchase", "Sale", "Supplier", "Transfer"],

  endpoints:()=>({})
})




