import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Languagedetector from "i18next-browser-languagedetector";
import { uk } from "./locales/uk.js";
import { en } from "./locales/en.js";
import { LOCALS } from "./constants";

const resources = {
	[LOCALS.UA]: {
		translation: uk,
	},
	[LOCALS.EN]: {
		translation: en,
	},
};

i18n
	.use(initReactI18next)
	.use(Languagedetector)
	.init({
		resources,
		lng: LOCALS.EN,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
