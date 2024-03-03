import { useTranslation } from "react-i18next";

export function useNestedObjectTranslation(obj, mainKey, targetKey) {
	const { t } = useTranslation();

	// Функція для рекурсивного перекладу значень
	const translateValue = (value, keyPath) => {
		try {
			if (typeof value === "object") {
				// Якщо значення є об'єктом, перекладемо його
				return Object.keys(value).reduce((acc, innerKey) => {
					const innerValue = value[innerKey];
					const newKeyPath = `${keyPath}.${innerKey}`; // Додаємо новий ключ до шляху
					acc[innerKey] = translateValue(innerValue, newKeyPath); // Рекурсивно перекладаємо вкладені значення
					return acc;
				}, {});
			} else {
				// Якщо значення не є об'єктом, використовуємо функцію перекладу для ключа
				return t(keyPath);
			}
		} catch (error) {
			console.error("Translation error:", error);
			return `Error translating key "${keyPath}"`;
		}
	};

	// Головна функція для перекладу вкладених об'єктів
	const translateNestedObjects = (nestedObj) => {
		try {
			if (!nestedObj || typeof nestedObj !== "object") {
				console.error("Invalid nested object:", nestedObj);
				return [];
			}

			const targetObject = nestedObj[mainKey]; // Отримуємо цільовий об'єкт за ключем mainKey

			if (!targetObject || !targetObject[targetKey]) {
				console.error(`No object found under key "${targetKey}"`);
				return [];
			}

			const targetMenu = targetObject[targetKey]; // Отримуємо цільовий об'єкт за ключем targetKey
			const translatedMenu = Object.keys(targetMenu).map((key) => {
				const currentKeyPath = `${mainKey}.${targetKey}.${key}`; // Формуємо шлях до кожного ключа
				const value = targetMenu[key];
				return { [key]: translateValue(value, currentKeyPath) }; // Перекладаємо значення згідно зі шляхом ключа
			});

			return translatedMenu;
		} catch (error) {
			console.error("Translation error:", error);
			return [];
		}
	};

	return translateNestedObjects(obj); // Повертаємо перекладені вкладені об'єкти
}
