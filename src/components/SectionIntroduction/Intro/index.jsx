import style from "./intro.module.scss";
import { IntroItem } from "../IntroItem";
import { bytemeld } from "../introData";

export function Intro({ isByte }) {
	return (
		<div className={style.wrapper}>
			<ul className={style.box_one}>
				{bytemeld.map(
					({ char, word }, index) =>
						index < 4 && (
							<IntroItem
								key={index}
								isByte={isByte}
								word={word}
								char={char}
								index={index}
							/>
						)
				)}
			</ul>
			<ul className={style.box_two}>
				{bytemeld.map(
					({ char, word }, index) =>
						index >= 4 && (
							<IntroItem
								key={index}
								isByte={isByte}
								word={word}
								char={char}
								index={index}
							/>
						)
				)}
			</ul>
		</div>
	);
}
