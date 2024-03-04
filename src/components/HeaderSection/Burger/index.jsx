import style from "./burger.module.scss";

export function Burger({ isOpenBurgerMenu, toggleBurgerMenu }) {
	return (
		<div
			id="burger"
			className={`${style.burger} ${isOpenBurgerMenu && style.active}`}
			onClick={toggleBurgerMenu}
		>
			<button
				type="button"
				className={style.burger_button}
			>
				<span className={`${style.burger_bar} ${style.burger_bar_1}`}></span>
				<span className={`${style.burger_bar} ${style.burger_bar_2}`}></span>
				<span className={`${style.burger_bar} ${style.burger_bar_3}`}></span>
			</button>
		</div>
	);
}
