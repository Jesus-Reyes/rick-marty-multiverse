

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Characters, LocationCharacter } from '../interfaces';


export const rickMortyApi = createApi({
  reducerPath: 'rickMorty', 
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api'
  }), 
  
  endpoints: (builder) => ({
    getCharacters : builder.query<Characters, number>({
      query: (page) => `/character?page=${page}`
    }), 
    getCharactersByName : builder.query<Characters, string>({
      query: (name) => `/character?name=${name}`
    }), 
    getLocation: builder.query<LocationCharacter, string>({
      query: (url) => url,
    }),
  })

});


export const { useGetCharactersQuery , useGetCharactersByNameQuery, useGetLocationQuery } = rickMortyApi;