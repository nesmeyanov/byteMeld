import style from "./work.module.scss";
import { ArrowGreen } from "../../Icons";

export function Work({ site, img, isMobil }) {
	return (
		<a
			href={site.url}
			rel="noreferrer"
			target="_blank"
			className={style.wrapper}
		>
			<div className={style.image}>
				<img
					src={img}
					alt={site.title}
				/>
			</div>
			<h3 className={style.title}>{site.title}</h3>
			<div className={style.info_box}>
				<p className={style.desc}>{site.desc}</p>
				{!isMobil && (
					<div className={style.link}>
						<ArrowGreen />
					</div>
				)}
			</div>
		</a>
	);
}
