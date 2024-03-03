import style from "./menu.module.scss";
import { useGetArrayObjects } from "../../../utils/hooks";
import { MenuItem } from "../MenuItem";

export function Menu() {
	const { dataMenu } = useGetArrayObjects();
	console.log(dataMenu);



	return (
		<nav className={style.nav}>
			<ul className={style.nav_list}>
				{dataMenu.map((menu) =>
					Object.keys(menu).map((key) => {
						const { title, anchor } = menu[key];
						if (title) {
							return (
								<MenuItem
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
