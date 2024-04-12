import style from "./contacts.module.scss"
import {listLinks}	from "./listLinks.js"
export function Contacts({t}) {

	return (
		<div className={style.wrapper}>
			<h2 className={style.title}>{t("forma.title")}</h2>
			<ul	className={style.list}>
				{listLinks?.map((item, index) => (
					<li key={index} className={style.item}>
						<span>{item.title}</span>
						<a href={item.url} target="_blank" rel="noreferrer">{item.link}</a>
					</li>
				))}
			</ul>
		</div>
	)
}