import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const bytemeldApi = createApi({
	reducerPath: "bytemeldApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://n4feteigq0.execute-api.eu-central-1.amazonaws.com/dev/",
	}),
	endpoints: (build) => ({
		getArticles: build.query({
			query: ({ limit = 2, offset = 0, locale = "en" }) => ({
			url: `articles?limit=${limit}&offset=${offset}&locale=${locale}`,
			// query: () => ({
			// 	url: `articles?limit=6&offset=0&locale=en`,
			}),
			transformResponse: (response) => response.articles,
		}),
	}),
});

export const { useGetArticlesQuery } = bytemeldApi;