import style from "./burgerItem.module.scss";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../Icons";

export function BurgerItem({ location, toggleBurgerMenu, title, anchor }) {
	return (
		<>
			<li
				className={style.li_wrapper}
				onClick={toggleBurgerMenu}
			>
				<Link
					{...(location.pathname !== "/" && { to: "/" })}
					data-id={anchor && anchor}
					className={style.item_link}
				>
					{title}
				</Link>
				<span className={style.item_icon}>
					<ArrowRight />
				</span>
			</li>
		</>
	);
}
