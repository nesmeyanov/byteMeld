import { useState, useEffect } from "react";
import style from "./intro.module.scss";
import { IntroItem } from "../IntroItem";
import { byte, meld } from "../introData";

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



export function Intro() {
	const [displayedText, setDisplayedText] = useState(byte.join(""));

	useEffect(() => {
		let currentIndex = 0;
		const interval = setInterval(() => {
			if (currentIndex >= byte.length) {
				clearInterval(interval);
				return;
			}
			const updatedText = displayedText.split("");
			updatedText[currentIndex] = meld[currentIndex];
			setDisplayedText(updatedText.join(""));
			currentIndex++;
		}, 100); 

		return () => clearInterval(interval);
	}, [displayedText]);

	return (
		<div className={style.wrapperIntro}>
			<ul className={style.box_one}>
				{displayedText.split("").map(
					(char, index) =>
						index < 4 && (
							<IntroItem
								key={index}
								item={char}
							/>
						)
				)}
			</ul>
			<ul className={style.box_two}>
				{displayedText.split("").map(
					(char, index) =>
						index >= 4 && (
							<IntroItem
								key={index}
								item={char}
							/>
						)
				)}
			</ul>
		</div>
	);
}