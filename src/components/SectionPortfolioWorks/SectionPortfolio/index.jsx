import style from "./sectionPortfolio.module.scss";
import { SliderWorks } from "../SliderWorks";

export function SectionPortfolio() {

	return (
		<section id='portfolio' className={style.wrapperPortfolio}>
			<div className={style.container}>
				<div className={style.slider_body}>
					<SliderWorks />
				</div>
			</div>
		</section>
	)
}