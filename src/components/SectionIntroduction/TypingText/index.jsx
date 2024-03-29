import style from "./typingText.module.scss";
import { ReactTyped } from "react-typed";
import "./cursor.scss";
import { LOCALS } from "../../../i18n/constants";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export function TypingText() {
	const langUA = i18next.language === LOCALS.UA;

	const { t } = useTranslation();
	const text = t("intro.text");

	return (
		<p className={style.wrapperTyping}>
			{langUA && (
				<ReactTyped
					startWhenVisible
					strings={[
						"",
						"",
						text
					]}
					typeSpeed={120}
				/>
			)}
			{!langUA && (
				<ReactTyped
					startWhenVisible
					strings={[
						"",
						"",
						text
					]}
					typeSpeed={120}
				/>
			)}
		</p>
	);
}
