import style from "./burger.module.scss";

export function Burger() {
	return (
		<div
			id="burger"
			class=""
		>
			<button
				type="button"
				title="Menu"
				className={style.burger_button}
			>
				<span class="burger_bar burger_bar_1"></span>
				<span className={`${style.burger_bar}`}></span>
				<span class="burger_bar burger_bar_2"></span>
				<span class="burger_bar burger_bar_3"></span>
			</button>
		</div>
	);
}
