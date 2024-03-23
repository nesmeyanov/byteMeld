import style from "./pageArticle.module.scss"

export function PageArticle() {
	return (
		<section className={style.wrapper}>
			<div className={style.tittle_box}>
				<h2 className={style.title}>Article</h2>
			</div>
		</section>
	);
}