import style from "./pageArticle.module.scss";
import { useParams, Link } from "react-router-dom";
import { useGetArticlesQuery } from "../../../store/bytemeld/bytemeld.api";
import { Error } from "../../Error";
import { Loader } from "../../Loader";
import { ItemPageArticle } from "../ItemPageArticle";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "../../Icons";

export function PageArticle() {
	const { t } = useTranslation();
	const { slug } = useParams();
	const { data, isError, isLoading } = useGetArticlesQuery();

	const selectedArticle = data && data.find((article) => article.slug === slug);

	return (
		<section className={style.wrapper}>
			<div className={`${style.container} ${isError && style.error}`}>
				{isError && <Error />}
				{isLoading && <Loader />}
				<div className={style.article_body}>
					<div className={style.title_box}>
						<Link to="/blog">{t("blog.title")}</Link>
						<span className={style.arrow}>
							<ArrowRight
								stroke="white"
								width={24}
								height={24}
							/>
						</span>
						<span className={style.title}>{selectedArticle?.title}</span>
					</div>
					<ItemPageArticle {...selectedArticle} />
				</div>
			</div>
		</section>
	);
}
