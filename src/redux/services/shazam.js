import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_API_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => 'charts/track'}),
    getSongDetails: builder.query({
      query: ({songid}) => `songs/get-details?key=${songid}`,
    }),
    getArtistDetails: builder.query({query: (artistId) => `artists/get-details?id=${artistId}`}),
    getSongByCountry: builder.query({query: (countryCode) => `charts/track?locale=${countryCode}`}),
    getSongBySearch: builder.query({query: (searchTerm) => `search?term=${searchTerm}`}),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetSongByCountryQuery,
  useGetSongBySearchQuery,
} = shazamApi;
