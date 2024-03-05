import { useState, useEffect } from "react";
import style from "./sectionIntro.module.scss";
import { Intro } from "../Intro";
import { TypingText } from "../TypingText";

export function SectionIntro() {
	const [isByte, SetIsByte] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			SetIsByte(true);
		}, 1000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<section className={style.wrapperIntro}>
			<div className={style.container}>
				<Intro isByte={isByte} />
				<TypingText/>
			</div>
		</section>
	);
}
