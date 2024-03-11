import style from "./sectionPortfolio.module.scss";
import { SliderWorks } from "../SliderWorks";
import { BreakPoint } from "../../../router";
import { useContext } from "react";
import { useGetArrayObjects } from "../../../utils/hooks";
import { useTranslation } from "react-i18next";

export function SectionPortfolio() {
	const isMobil = useContext(BreakPoint);
	const { dataPortfolio } = useGetArrayObjects();
	const { t } = useTranslation();

	return (
		<section
			id="portfolio"
			className={style.wrapperPortfolio}
		>
			<div className={style.container}>
				<h3 className={style.title}>{t("portfolio.title")}</h3>
				<div className={style.slider_body}>
					<SliderWorks
						isMobil={isMobil}
						data={dataPortfolio}
					/>
				</div>
			</div>
		</section>
	);
}
