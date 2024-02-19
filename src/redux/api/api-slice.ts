import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

interface ErrorResponse {
  status: number;
  data: {
    errorMessage: string;
  };
}

const baseQuery: BaseQueryFn<any, any, any> = async (
  args,
  api,
  extraOptions,
) => {
  const rowQuery = fetchBaseQuery({
    baseUrl: Config.API_URL,
    prepareHeaders: (headers, {getState}) => {
      // const token = getAccessToken();
      const token = 'token';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);

        // const selectedBrokerHouse =
        //   getState().brokerHouse?.selectedBrokerHouse?.id;
        const selectedBrokerHouse = 'get broker house';
        if (selectedBrokerHouse) {
          headers.set('X-BrokerId', selectedBrokerHouse);
        }
      }
      return headers;
    },
  });
  return await rowQuery(args, api, extraOptions);
};

const baseQueryWithReAuth: BaseQueryFn<any, any, any> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
  const {dispatch} = api;
  const {error} = result as {error: ErrorResponse};

  /**
   * Error
   */
  if (error) {
    if (error?.status === 401) {
      if (error?.data?.errorMessage === 'Logged in from another device!') {
        return {...result, data: error.data};
      }
      return result;
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  tagTypes: ['sharePrice'],
  endpoints: _builder => ({}),
});
