import style from "./typingText.module.scss";
import Typed from "react-typed";
import "./cursor.scss";
import { LOCALS } from "../../../i18n/constants";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export function TypingText() {
	const langUA = i18next.language === LOCALS.UK;

	const { t } = useTranslation();
	const text = t("intro.text");

	return (
		<p className={style.wrapperTyping}>
			{langUA && (
				<Typed
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
				<Typed
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
