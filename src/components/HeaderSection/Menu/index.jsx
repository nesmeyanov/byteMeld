import style from "./menu.module.scss";
import { useGetArrayObjects } from "../../../utils/hooks";
import { MenuItem } from "../MenuItem";

export function Menu({ location }) {
	const { dataMenu } = useGetArrayObjects();

	return (
		<nav className={style.nav}>
			<ul className={style.nav_list}>
				{dataMenu.map((menu) =>
					Object.keys(menu).map((key) => {
						const { title, anchor } = menu[key];
						if (title) {
							return (
								<MenuItem
									location={location}
									key={title}
									title={title}
									anchor={anchor}
								/>
							);
						}
						return null;
					})
				)}
			</ul>
		</nav>
	);
}
