import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PersonDescription } from '../../components/PersonDescription/PersonDescription';
import { PersonProps } from '../../components/PersonCard/PersonCard';

interface PersonList {
  count: number;
  results: PersonProps[];
}

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPersonById: builder.query<PersonDescription, string | undefined>({
      query: (id) => (id ? `people/${id}` : '')
    }),
    getPersonList: builder.query<PersonList, { searchTerm?: string; pageNumber?: string }>({
      query: ({ searchTerm = '', pageNumber = 1 } = {}) => `people/?search=${searchTerm}&page=${pageNumber}`
    })
  })
});

export const { useGetPersonByIdQuery, useGetPersonListQuery } = starWarsApi;
