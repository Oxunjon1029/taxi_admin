import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL, headers } from '../../constants/host.ts';


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, headers: headers }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => "taxi_admin_mock_api"
    })
  })
})
export const { useGetAllDataQuery } = apiSlice
export default apiSlice.reducer