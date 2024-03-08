import "../../i18n";
import { uk } from "../../i18n/locales/uk";
import { useNestedObjectTranslation } from "./useNestedObjectTranslation";

export function useGetArrayObjects() {
	const dataMenu = useNestedObjectTranslation(uk, "header", "menu");
	const dataAbout = useNestedObjectTranslation(uk, "about", "quality");
	const dataFooter = useNestedObjectTranslation(uk, "footer", "menu");

	return { dataMenu, dataAbout, dataFooter };
}
