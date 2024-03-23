import style from "./itemPageBlog.module.scss"

export function ItemPageBlog({ ...article }) {
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
					{/* <span className={style.date}>{formatDate(article.date)}</span> */}
				</div>
			</div>
		</div>
	)
}