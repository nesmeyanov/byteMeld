import { SectionAbout } from "../../components/SectionAboutUs/SectionAbout";
import { SectionServices } from "../../components/SectionAllServices/SectionServices";
import { SectionIntro } from "../../components/SectionIntroduction/SectionIntro";

export function Home() {
	return (
		<div id="main">
			<SectionIntro />
			<SectionAbout />
			<SectionServices />
		</div>
	);
}
