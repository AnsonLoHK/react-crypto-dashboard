// inject the api endpoints in other files and export them from there - that way you will be sure to always import
// the endpoints in a way that they are definitely injected.
import { emptySplitApi } from "./emptySplitApi";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build = {
    example: build.query({
      query: () => "test",
    }),
  }),
  overrideExisting: false,
});

export const { useExampleQuery } = extendedApi;

// You will get a warning if you inject an endpoint that already
// exists in development mode when you don't explicitly specify overrideExisting: true.
// You will not see this in production and the existing endpoint will just be overriden
//     , so make sure to account for this in your tests.
