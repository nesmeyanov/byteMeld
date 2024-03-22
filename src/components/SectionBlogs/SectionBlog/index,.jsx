import { useTranslation } from "react-i18next";
import style from "./sectionBlog.module.scss";
import { Link } from "react-router-dom";
import { BlogItem } from "../BlogItem";
import { useGetArticlesQuery } from "../../../store/bytemeld/bytemeld.api";

export default function SectionBlog() {
	const { t } = useTranslation();
	const { data } = useGetArticlesQuery();

	console.log(data);

	return (
		<section
			id="blog"
			className={style.wrapperBlog}
		>
			<div className="container">
				<div className={style.header_box}>
					<h2 className={style.title}>{t("blog.title")}</h2>
					<Link to="/blog"> {t("blog.read")}</Link>
				</div>
				<div className={style.blog_box}>
					<BlogItem />
				</div>
			</div>
		</section>
	);
}
