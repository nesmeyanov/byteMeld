import { motion } from "framer-motion"
import style from "./burgerMenu.module.scss"
import { wrapperBurger } from "../../../utils/animation";
import { Link } from "react-router-dom";
import { BurgerItem } from "../BurgerItem";

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
				<ul className={style.list_burger}>
					{dataMenu.map((menu) =>
						Object.keys(menu).map((key) => {
							const { title, anchor } = menu[key];
							if (title) {
								return (
									<BurgerItem
										location={location}
										key={title}
										title={title}
										anchor={anchor}
										toggleBurgerMenu={toggleBurgerMenu}
									/>
								);
							}
							return null;
						})
					)}
				</ul>
				<Link
					className={style.btn_burgerLink}
					{...(location.pathname !== "/" && { to: "/" })}
					onClick={toggleBurgerMenu}
				>
					<button className={style.btn_burger}>{t("header.btn")}</button>
				</Link>
			</div>
		</motion.div>
	);
}