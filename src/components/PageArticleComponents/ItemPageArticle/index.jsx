import style from "./itemPageArticle.module.scss"
import { formatDate } from "../../../utils/helpers";

export function ItemPageArticle({ title, date, thumbnail, blocks }) {

	return (
		<div className={style.wrapper}>
			<div className={style.main_box}>
				<div className={style.image}>
					<img
						src={thumbnail}
						alt={title}
					/>
				</div>
				<div className={style.content_box}>
					<span className={style.date}>{formatDate(date)}</span>
					<h3 className={style.title}>{title}</h3>
				</div>
			</div>
		</div>
	);
}