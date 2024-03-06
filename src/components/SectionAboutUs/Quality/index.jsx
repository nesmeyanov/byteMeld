import style from "./quality.module.scss"

export function Quality({ desc, icon }) {
	return (
		<>
			<div className={style.wrapper}>
				<span className={style.icon}>{icon}</span>
				<p className={style.desc}>{desc}</p>
			</div>
			
		</>
	);
}