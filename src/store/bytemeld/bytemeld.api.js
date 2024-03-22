import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const bytemeldApi = createApi({
	reducerPath: "bytemeldApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://n4feteigq0.execute-api.eu-central-1.amazonaws.com/dev/",
	}),
	endpoints: (build) => ({
		getArticles: build.query({
			query: () => ({
				url: `articles?amount=2`,
			}),
			transformResponse: (response) => response.articles,
		}),
	}),
});

export const { useGetArticlesQuery } = bytemeldApi;