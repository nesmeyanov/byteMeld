import style from "./menuItem.module.scss";
import { Link, useLocation } from "react-router-dom";

export function MenuItem({title, anchor}) {
	const location = useLocation();
	
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
