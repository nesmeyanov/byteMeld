import { useState, useEffect } from "react";
import style from "./intro.module.scss";
import { IntroItem } from "../IntroItem";
import { bytemeld } from "../introData";

// export function Intro() {
// 	return (
// 		<div className={style.wrapperIntro}>
// 			<ul className={style.box_one}>
// 				{byte.map(
// 					(item, index) =>
// 						index < 4 && (
// 							<IntroItem
// 								key={index}
// 								item={item}
// 							/>
// 						)
// 				)}
// 			</ul>
// 			<ul className={style.box_two}>
// 				{byte.map(
// 					(item, index) =>
// 						index >= 4 && (
// 							<IntroItem
// 								key={index}
// 								item={item}
// 							/>
// 						)
// 				)}
// 			</ul>
// 		</div>
// 	);
// }

// index < 4 &&
// index >= 4 && 

export function Intro() {
	 const [isByte, SetIsByte] = useState(false);

 useEffect(() => {
		const timeout = setTimeout(() => {
			SetIsByte(true);
		}, 3000); // Затримка в 3 секунди

		return () => clearTimeout(timeout);
 }, []);

	return (
		<div className={style.wrapperIntro}>
			<ul className={style.box_one}>
				{bytemeld.map(
					({ char, word }, index) =>
						index < 4 && (
							<IntroItem
								key={index}
								isByte={isByte}
								word={word}
								char={char}
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
							/>
						)
				)}
			</ul>
		</div>
	);
}