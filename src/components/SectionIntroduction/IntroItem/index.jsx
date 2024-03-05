import style from "./introItem.module.scss"
import { motion } from "framer-motion";
import { charAnimation, wordAnimation, borderAnimation } from "../../../utils/animation/introAnimation";

export function IntroItem({ isByte, word, char, index }) {
	return (
		<>
			<motion.li
				className={style.item_intro}
				initial={isByte ? "hidden" : "visible"}
				animate={isByte ? "visible" : "hidden"}
				variants={borderAnimation(index)}
			>
				<motion.span
					className={style.char}
					initial={isByte ? "hidden" : "visible"}
					animate={isByte ? "visible" : "hidden"}
					variants={charAnimation(index)}
				>
					{char}
				</motion.span>
				<motion.span
					className={style.word}
					initial={isByte ? "hidden" : "visible"}
					animate={isByte ? "visible" : "hidden"}
					variants={wordAnimation(index)}
				>
					{word}
				</motion.span>
			</motion.li>
		</>
	);
}