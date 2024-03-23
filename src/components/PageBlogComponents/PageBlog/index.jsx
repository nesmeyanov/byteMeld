import { useTranslation } from "react-i18next";
import style from "./pageBlog.module.scss";
import { ItemPageBlog } from "../ItemPageBlog";
import { useGetArticlesQuery } from "../../../store/bytemeld/bytemeld.api";
import { Error } from "../../Error";
import { Loader } from "../../Loader";

export default function PageBlog() {
	const { t } = useTranslation();
	const { data, isError, isLoading } = useGetArticlesQuery();

	return (
		<section className={style.wrapper}>
			<div className={style.tittle_box}>
				<h2 className={style.title}>{t("blog.title")}</h2>
			</div>

			{isError && <Error />}
			<div className={style.blog_box}>
				{isLoading && <Loader />}
				{data?.map((article) => (
					<ItemPageBlog
						key={article.id}
						{...article}
					/>
				))}
			</div>
		</section>
	);
}
