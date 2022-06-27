import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// one API slice per base URL" as a rule of thumb
// ex: "https://pokeapi.co/api/v2/pokemon/${name}
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
