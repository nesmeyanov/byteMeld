import style from "./menuItemFooter.module.scss";
import { Link } from "react-router-dom";
import { scrollTo, scrollUpPage } from "../../../utils/helpers";
import { useEffect } from "react";

export function MenuItemFooter({ title, anchor, location }) {
	//useEffect відловдює всі події click з перевіркою на data-id
	useEffect(() => {
		const handleClick = (event) => {
			const dataId = event.target.getAttribute("data-id");
			if (dataId) {
				const timer = setTimeout(() => {
					dataId === "header" ? scrollUpPage() : scrollTo(dataId);
				}, 100);
				return () => clearTimeout(timer);
			}
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);
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
