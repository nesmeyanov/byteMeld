import style from "./intro.module.scss"

export function Intro() {
	return (
		<div className={style.wrapperIntro}>
			<div className={style.box_one}></div>
			<div className={style.box_two}></div>
		</div>
	);
}