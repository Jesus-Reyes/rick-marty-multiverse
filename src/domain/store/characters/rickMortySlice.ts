

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Characters, LocationCharacter } from '../../interfaces';

export const rickMortySlice = createApi({
  reducerPath: 'rickMorty', 
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api'
  }), 
  
  endpoints: (builder) => ({
    getCharacters : builder.query<Characters, number>({
      query: (page) => `/character?page=${page}`
    }), 

    getLocation: builder.query<LocationCharacter, string>({
      query: (url) => url,
    }),

  })

});


export const { useGetCharactersQuery , useGetLocationQuery } = rickMortySlice