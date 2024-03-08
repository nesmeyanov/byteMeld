import style from "./policy.module.scss"
import { useTranslation } from "react-i18next";

export function Policy() {
	const {t} = useTranslation();

	return (
		<div className={style.privacy_box}>
			<p className={style.item_policy}>
				{t("footer.policy")}
			</p>
			<p className={style.item_use}>
				{t("footer.use")}
			</p>
		</div>
	);
}