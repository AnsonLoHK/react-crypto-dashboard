//  Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  實際url: 'https://coinranking1.p.rapidapi.com/exchanges',
const baseUrl = "https://coinranking1.p.rapidapi.com";
const cryptoApiheaders = {
  "X-RapidAPI-Key": "8384c02bd3mshea42ec0e4603444p111cbbjsn2af36ac4c962",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

// API Slice Contents
// initialize an empty api service that we'll inject endpoints into later as needed
// that we have our URL and headers, let us start creating and fetching data.
const createRequest = (url) => ({ url, cryptoApiheaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: { baseUrl } }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("exchanges"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi; //引用在other.js

// !!!!!
// 專案有用到
