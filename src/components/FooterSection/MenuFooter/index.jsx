import style from "./menuFooter.module.scss"
import { MenuItemFooter } from "../MenuItemFooter"


export function MenuFooter({ location, dataFooter }) {
	return (
		<div className={style.menu}>
			<ul className={style.menu_list}>
				{dataFooter.map((menu) =>
					Object.keys(menu).map((key) => {
						const { title, anchor } = menu[key];
						if (title) {
							return (
								<MenuItemFooter
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
		</div>
	);
}