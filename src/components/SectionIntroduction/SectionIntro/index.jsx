import { useState, useEffect } from "react";
import style from "./sectionIntro.module.scss";
import { Intro } from "../Intro";

export function SectionIntro() {
	const [isByte, SetIsByte] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			SetIsByte(true);
		}, 1000); // Затримка в 3 секунди

		return () => clearTimeout(timeout);
	}, []);

	return (
		<section className={style.wrapperIntro}>
			<div className={style.container}>
				<Intro isByte={isByte} />
			</div>
		</section>
	);
}
