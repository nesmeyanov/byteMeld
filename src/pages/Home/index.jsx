import { SectionAbout } from "../../components/SectionAboutUs/SectionAbout";
import { SectionIntro } from "../../components/SectionIntroduction/SectionIntro";

export function Home() {
	return (
		<div id="main">
			<SectionIntro />
			<SectionAbout />
		</div>
	);
}
