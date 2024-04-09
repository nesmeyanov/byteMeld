import { useTranslation } from "react-i18next";
import style from "./pageBlog.module.scss";
import "./paginate.scss";
import { ItemPageBlog } from "../ItemPageBlog";
import { useGetArticlesQuery } from "../../../store/bytemeld/bytemeld.api";
import { Error } from "../../Error";
import { Loader } from "../../Loader";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

export default function PageBlog() {
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 6;

	const { t, i18n } = useTranslation();
	const { data, isError, isLoading } = useGetArticlesQuery({
		limit: itemsPerPage,
		offset: itemOffset,
		locale: i18n.language,
	});

	const articles = data?.articles;
	const totalArticles = data?.totalItems;

	useEffect(() => {
		setPageCount(Math.ceil(totalArticles / itemsPerPage));
	}, [itemsPerPage, totalArticles]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % totalArticles;
		setItemOffset(newOffset);
	};

	return (
		<section className={`${style.wrapper} ${isError && style.error}`}>
			<div className={style.tittle_box}>
				<h2 className={style.title}>{t("blog.title")}</h2>
			</div>

			{isError && <Error />}
			<div className={style.blog_wrapper}>
				<div className={style.blog_container}>
					{isLoading && <Loader />}
					{articles?.map((article) => (
						<ItemPageBlog
							key={article.id}
							{...article}
						/>
					))}
				</div>
			</div>

			<div className={style.paginate_box}>
				<ReactPaginate
					breakLabel="..."
					nextLabel=">"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount || 0}
					previousLabel="<"
					renderOnZeroPageCount={null}
					containerClassName="pagination"
					pageClassName="page-num"
					previousLinkClassName="page-num"
					nextLinkClassName="page-num"
					activeClassName="active"
				/>
			</div>
		</section>
	);
}
