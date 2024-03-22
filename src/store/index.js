import { configureStore } from "@reduxjs/toolkit";
import { bytemeldApi } from "./bytemeld/bytemeld.api";

export const store = configureStore({
	reducer: {
		[bytemeldApi.reducerPath]: bytemeldApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(bytemeldApi.middleware),
});


