import style from "./itemPageBlog.module.scss"
import { formatDate } from "../../../utils/helpers";
import { Link } from "react-router-dom";

export function ItemPageBlog({ ...article }) {
	return (
		<Link
			to={`/blog/${article.slug}`}
			className={style.wrapperLink}
		>
			<div className={style.image}>
				<img
					src={article.thumbnail}
					alt={article.title}
				/>
			</div>
			<div className={style.content_box}>
				<span className={style.date}>{formatDate(article.date)}</span>
				<h3 className={style.title}>{article.title}</h3>
			</div>
		</Link>
	);
}