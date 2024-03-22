import { useTranslation } from "react-i18next";
import style from "./error.module.scss";

export function Error() {
	const { t } = useTranslation();

	return (
		<div className={style.error_box}>
			<p className={style.errpr_title}>{t("blog.error")}</p>
		</div>
	);
}
