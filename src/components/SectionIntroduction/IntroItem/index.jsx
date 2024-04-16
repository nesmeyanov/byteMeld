import style from "./introItem.module.scss";
import { motion } from "framer-motion";
import {
	charAnimation,
	wordAnimation,
	borderAnimation,
} from "../../../utils/animation/introAnimation";
import { useState } from "react";

export function IntroItem({ isByte, word, char, index }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleTouchStart = () => {
		setIsHovered(true);
	};

	const handleTouchEnd = () => {
		setIsHovered(false);
	};
	return (
		<>
			<motion.li
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				className={style.item_intro}
				initial={isByte && !isHovered ? "hidden" : "visible"}
				animate={isByte && !isHovered ? "visible" : "hidden"}
				variants={borderAnimation(index)}
			>
				<motion.span
					className={style.char}
					initial={isByte && !isHovered ? "hidden" : "visible"}
					animate={isByte && !isHovered ? "visible" : "hidden"}
					variants={charAnimation(index)}
				>
					{char}
				</motion.span>
				<motion.span
					className={style.word}
					initial={isByte && !isHovered ? "hidden" : "visible"}
					animate={isByte && !isHovered ? "visible" : "hidden"}
					variants={wordAnimation(index)}
				>
					{word}
				</motion.span>
			</motion.li>
		</>
	);
}
