import * as Yup from "yup";
import i18n from "i18next";

export const formaSchemaSource = (t) =>
	Yup.object({
		fullName: Yup.string()
			.matches(/^[a-zA-Zа-яА-Я\s]+$/, i18n.t("forma.schema.fullName1"))
			// .min(2, i18n.t("forma.schema.fullName2"))
			.test("minLength", i18n.t("forma.schema.fullName2"), (value) => {
				const minLength = 2;
				const realLength = value.replace(/\s/g, "").length;
				return realLength >= minLength;
			})
			.required(i18n.t("forma.schema.fullName3")),
		email: Yup.string()
			.matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, i18n.t("forma.schema.email1"))
			.required(i18n.t("forma.schema.email2")),
		details: Yup.string()
			.min(10, i18n.t("forma.schema.details1"))
			.required(i18n.t("forma.schema.details2")),
	});

export const formaSchemaStaff = (t) =>
	Yup.object({
		staff: Yup.array()
			.min(1, i18n.t("forma.schema.staff1"))
			.required(i18n.t("forma.schema.staff2")),
		fullName: Yup.string()
			.matches(/^[a-zA-Zа-яА-Я]+$/, i18n.t("forma.schema.fullName1"))
			.min(2, i18n.t("forma.schema.fullName2"))
			.required(i18n.t("forma.schema.fullName3")),
		email: Yup.string()
			.matches(
				/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
				i18n.t("forma.schema.email1")
			)
			.required(i18n.t("forma.schema.email2")),
		details: Yup.string()
			.min(10, i18n.t("forma.schema.details1"))
			.required(i18n.t("forma.schema.details2")),
	});