import { useTranslation } from "react-i18next";
import style from "./sectionBlog.module.scss";
import { Link } from "react-router-dom";
import { BlogItem } from "../BlogItem";
import { useGetArticlesQuery } from "../../../store/bytemeld/bytemeld.api";
import { Error } from "../../Error";
import { Loader } from "../../Loader";


export default function SectionBlog() {
	const { t, i18n } = useTranslation();
	const { data, isError, isLoading } = useGetArticlesQuery({
		limit: 2,
		offset: 0,
		locale: i18n.language,
	});

	const articles = data?.articles;
	console.log(articles);

	return (
		<section
			id="blog"
			className={style.wrapperBlog}
		>
			<div className={style.container}>
				<div className={style.header_box}>
					<h2 className={style.title}>{t("blog.title")}</h2>
					<Link
						className={style.read}
						to="/blog"
					>
						{" "}
						{t("blog.read")}
					</Link>
				</div>

				{isError && <Error />}
				<div className={style.blog_box}>
					{isLoading && <Loader />}
					{articles?.map((article) => (
						<BlogItem
							key={article._id}
							{...article}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
