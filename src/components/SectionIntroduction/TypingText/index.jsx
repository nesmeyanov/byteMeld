import style from "./typingText.module.scss";
import Typed from "react-typed";
import "./cursor.scss";
import { LOCALS } from "../../../i18n/constants";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export function TypingText() {
	const langUA = i18next.language === LOCALS.UK;

	//Три нижні рядки потрібні для того щоб при зміні мови в Typed теж відбувалась зміна
	const { t } = useTranslation();
	const text = t("header.btn");
	console.log(text);

	return (
		<p className={style.wrapperTyping}>
			{langUA && (
				<Typed
					startWhenVisible
					strings={[
						"",
						"",
						"Ми розробляємо інноваційні рішення у веб-розробці",
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
						"We develop innovative solutions in web development",
					]}
					typeSpeed={120}
				/>
			)}
		</p>
	);
}
