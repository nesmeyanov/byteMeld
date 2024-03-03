import style from "./menuItem.module.scss";
import { Link } from "react-router-dom";

export function MenuItem({title, anchor}) {
	// console.log("title", title);

	return (
		<>
			<li className={style.item}>
				<Link
					data-id={anchor && anchor}
					className={style.link}
				>
					{title}
				</Link>
			</li>
		</>
	);
}
