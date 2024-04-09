import style from "./pageArticle.module.scss";
import { useParams, Link } from "react-router-dom";
import { useGetArticleBySlugQuery } from "../../../store/bytemeld/bytemeld.api";
import { Error } from "../../Error";
import { Loader } from "../../Loader";
import { ItemPageArticle } from "../ItemPageArticle";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "../../Icons";
import { useEffect } from "react";
import { scrollUpPage } from "../../../utils/helpers";

export function PageArticle() {
	const { t, i18n } = useTranslation();
	const { slug } = useParams();
	const { data, isError, isLoading } = useGetArticleBySlugQuery({
		slug,
		locale: i18n.language,
	});

	useEffect(() => {
		scrollUpPage();
	}, []);

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
						<span className={style.title}>{data?.title}</span>
					</div>
					<ItemPageArticle {...data} />
				</div>
			</div>
		</section>
	);
}
