import * as Yup from "yup";

export const formaSchema = Yup.object()({
	staff: Yup.array()
		.min(1, "Виберіть хоча б одну опцію")
		.required("Виберіть хоча б одну опцію"),
	fullName: Yup.string()
		.matches(/^[a-zA-Zа-яА-Я]+$/, "Поле має містити тільки літери")
		.min(2, "Мінімальна кількість літер 2")
		.required("Поле обов'язкове для заповнення"),
	email: Yup.string()
		.matches(
			/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
			"Невірний формат електронної пошти"
		)
		.required("Поле обов'язкове для заповнення"),
	details: Yup.string()
		.min(10, "Мінімальна кількість символів 10")
		.required("Поле обов'язкове для заповнення"),
});