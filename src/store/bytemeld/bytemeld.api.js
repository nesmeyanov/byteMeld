import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bytemeldApi = createApi({
	reducerPath: "bytemeldApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://n4feteigq0.execute-api.eu-central-1.amazonaws.com/dev/",
	}),
	endpoints: (build) => ({
		getArticles: build.query({
			query: ({ limit = 2, offset = 0, locale = "ua" }) => ({
				url: `articles?limit=${limit}&offset=${offset}&locale=${locale}`,
			}),
			transformResponse: (response) => ({
				articles: response.articles,
				totalItems: response.totalItems,
			}),
		}),
		getArticleBySlug: build.query({
			query: ({ slug, locale = "ua" }) => ({
				url: `articles/${slug}?locale=${locale}`,
			}),
			transformResponse: (response) => response.article,
		}),
	}),
});

export const { useGetArticlesQuery, useGetArticleBySlugQuery } = bytemeldApi;
