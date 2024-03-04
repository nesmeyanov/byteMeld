import style from "./sectionIntro.module.scss"
import { Intro } from "../Intro"

export function SectionIntro() {

	return (
		<section className={style.wrapperIntro}>
			<div className={style.container}>
				<Intro />
			</div>
		</section>
	)
}