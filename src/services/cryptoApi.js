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
const createRequest = (url) => ({ url, headers: cryptoApiheaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi", // 告诉redux-toolkit我们想把从这个api获取的数据放到store的什么位置
  // 根据url自动选择http或者https协议
  // 如果是移动端应用，由于模拟器中的网络与本地不一致，即使服务器在本地也不能使用127.0.0.1，必须用局域网地址
  baseQuery: fetchBaseQuery({ baseUrl }), // 发送请求的目的地址的前半部分
  // endpoints中放的是各种请求相关的函数
  endpoints: (builder) => ({
    getCryptos: builder.query({
      // ex: ()=> ({请求地址的后半部分 url: `/user/${id}`,  请求的方法  method: "get",})
      query: () => createRequest("/coins"),
    }),
  }),
});

// 导出可在函数式组件使用的hooks，它是基于定义的endpoints自动生成的
// 这个的名称是固定的，就是use加上前面定义的名字再加上query或者mutation
export const { useGetCryptosQuery } = cryptoApi;

// !!!!!
// 專案有用到
