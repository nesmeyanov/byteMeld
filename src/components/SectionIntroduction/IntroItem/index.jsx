import style from "./introItem.module.scss"

export function IntroItem({item}) {

	return (
		<>
			<li className={style.item_intro}>
				<span>{item}</span>
			</li>
		</>
	)
}