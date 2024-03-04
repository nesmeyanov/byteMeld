import { motion } from "framer-motion"
import style from "./burgerMenu.module.scss"

export function BurgerMenu({ dataMenu }) {
	return (
		<motion.div className={style.wrapper}>
			<motion.div className={style.container}></motion.div>
		</motion.div>
	);
}