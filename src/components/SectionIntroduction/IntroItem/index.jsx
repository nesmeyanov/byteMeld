import style from "./introItem.module.scss"
import { motion } from "framer-motion";

export function IntroItem({ isByte, word, char }) {
	return (
		<>
			<motion.li className={style.item_intro}>
				<motion.span className={style.char}>{char}</motion.span>
				<motion.span className={style.word}>{word}</motion.span>
			</motion.li>
		</>
	);
}