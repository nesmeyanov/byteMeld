import style from "./itemPageArticle.module.scss"

export function ItemPageArticle({ ...article }) {
	return (
		<div className={style.wrapper}>
			<div className={style.image}>
				<img
					src={article.thumbnail}
					alt={article.title}
				/>
			</div>
			<div className={style.content_box}>
				{/* <span className={style.date}>{formatDate(article.date)}</span> */}
				<h3 className={style.title}>{article.title}</h3>
				<p className={style.description}>{article.description}</p>
			</div>
		</div>
	);
}