import style from "./blogItem.module.scss";
import { ArrowGreen } from "../../Icons";
import { formatDate } from "../../../utils/helpers";
import { Link } from "react-router-dom";

export function BlogItem({ ...article }) {
	console.log(article);
	return (
		<div className={style.wrapper}>
			<div className={style.image}>
				<img
					src={article.thumbnail}
					alt={article.title}
				/>
			</div>
			<div className={style.content_box}>
				<h3 className={style.title}>{article.title}</h3>
				<div className={style.actions}>
					<span className={style.date}>{formatDate(article.date)}</span>
					<Link to={`/blog/${article.slug}`} className={style.link}>
						<ArrowGreen />
					</Link>
				</div>
			</div>
		</div>
	);
}