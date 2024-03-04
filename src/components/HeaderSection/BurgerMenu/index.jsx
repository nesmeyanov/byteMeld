import { motion } from "framer-motion"
import style from "./burgerMenu.module.scss"
import { wrapperBurger } from "../../../utils/animation";
import { Link } from "react-router-dom";

export function BurgerMenu({ dataMenu, location, t, isMobil, isOpenBurgerMenu, toggleBurgerMenu }) {
	return (
		<motion.div
			className={style.wrapperBurger}
			{...wrapperBurger}
			style={{
				clipPath: "inset(0% 95% 95% 0% round 10px)",
			}}
		>
			<div className={style.container}>
				<Link
					className={style.btn_link}
					{...(location.pathname !== "/" && { to: "/" })}
				>
					<button className={style.btn_header}>{t("header.btn")}</button>
				</Link>

			</div>
		</motion.div>
	);
}