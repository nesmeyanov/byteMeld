import style from "./itemPageArticle.module.scss";
import { formatDate } from "../../../utils/helpers";
import React from "react";

export function ItemPageArticle({ title, date, thumbnail, blocks }) {
	return (
		<div className={style.wrapper}>
			<div className={style.main_box}>
				<div className={style.image}>
					<img
						src={thumbnail}
						alt={title}
					/>
				</div>
				<div className={style.content_box}>
					<span className={style.date}>{formatDate(date)}</span>
					<h3 className={style.title}>{title}</h3>
				</div>
			</div>
			<div className={style.bloks_body}>
				{blocks?.map(({ subtitle, description, image }, index) => (
					<React.Fragment key={index}>
						
						{(subtitle || description) && (
							<div className={style.subcontent_box}>
								{subtitle && <h4 className={style.subtitle}>{subtitle}</h4>}
								{description && (
									<p className={style.description}>{description}</p>
								)}
							</div>
						)}

						{image && (
							<div className={style.sub_image}>
								<img
									src={image}
									alt={subtitle}
								/>
							</div>
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
