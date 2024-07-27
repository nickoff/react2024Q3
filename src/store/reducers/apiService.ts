import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PersonDescription } from '../../components/PersonDescription/PersonDescription';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPersonById: builder.query<PersonDescription, string | undefined>({
      query: (id) => `people/${id}`
    })
  })
});

export const { useGetPersonByIdQuery } = starWarsApi;
