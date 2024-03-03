import "../../i18n";
import { uk } from "../../i18n/locales/uk";
import { useNestedObjectTranslation } from "./useNestedObjectTranslation";

export function useGetArrayObjects() {

	const dataMenu = useNestedObjectTranslation(uk, "header", "menu");

	return { dataMenu };
}
