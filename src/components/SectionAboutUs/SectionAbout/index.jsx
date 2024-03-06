import style from "./sectionAbout.module.scss";
import { OpenTag, CloseTag } from "../../Icons";
import { useTranslation } from "react-i18next";
import { Quality } from "../Quality";
import { useGetArrayObjects } from "../../../utils/hooks";
import { aboutData } from "../aboutData";

export function SectionAbout() {
	const { t } = useTranslation();
	const { dataAbout } = useGetArrayObjects();

	return (
		<section
			id="about"
			className={style.wrapperAbout}
		>
			<div className={style.container}>
				<div className={style.box_about}>
					<div className={style.team}>
						<span className={style.open}>
							<OpenTag />
						</span>
						<p className={style.text}>{t("about.text1")}</p>
					</div>
					<div className={style.mission}>
						<p className={style.text}>{t("about.text2")}</p>
						<span className={style.close}>
							<CloseTag />
						</span>
					</div>
				</div>
				<div className={style.box_quality}>
					{dataAbout.map((menu, index) =>
						Object.keys(menu).map((key) => {
							const desc = menu[key];
							if (desc) {
								return (
									<Quality
										key={index}
										desc={desc}
										icon={aboutData[index]}
									/>
								);
							}
							return null;
						})
					)}
				</div>
			</div>
		</section>
	);
}
