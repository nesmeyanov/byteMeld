import style from "./work.module.scss";
import { ArrowGreen } from "../../Icons";

export function Work({ site, img }) {
	return (
		<div className={style.wrapper}>
			<a
				href={site.url}
				rel="noreferrer"
				target="_blank"
				className={style.image}
			>
				<img
					src={img}
					alt={site.title}
				/>
			</a>
			<h3 className={style.title}>{site.title}</h3>
			<div className={style.info_box}>
				<p className={style.desc}>{site.desc}</p>
				<a
					href={site.url}
					rel="noreferrer"
					target="_blank"
					className={style.link}
				>
					<ArrowGreen />
				</a>
			</div>
		</div>
	);
}
