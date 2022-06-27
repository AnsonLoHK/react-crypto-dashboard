/**   RTK 範例結構用法 step1 **/
// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// get our endpoint
const url = "https://coinranking1.p.rapidapi.com";
// RapidAPI. This API has a URL and headers, so let us get them
const headers = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "799b9cc14emsh9f25bfec0439608p176b8cjsn760190b3e59c",
};

// API Slice Contents
// that we have our URL and headers, let us start creating and fetching data.
const createRequest = (url) => ({ url, headers });
// 新的比對
const myApi = createApi({
  reducerPath: "xxx", //cryptoApi
  baseQuery: fetchBaseQuery({ url }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = myApi; //引用在other.js
// Now we have created a function/hook to access the getCryptos variable result from the API.

// We need to configure our store. So here is how we do it.
export default store({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
  },
});
