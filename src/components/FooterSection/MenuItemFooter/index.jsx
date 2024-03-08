import style from "./menuItemFooter.module.scss";
import { Link } from "react-router-dom"; 

export function MenuItemFooter({ title, anchor, location }) {
	return (
		<>
			<li className={style.item}>
				<Link
					{...(location.pathname !== "/" && { to: "/" })}
					data-id={anchor && anchor}
					className={style.link}
				>
					{title}
				</Link>
			</li>
		</>
	);
}