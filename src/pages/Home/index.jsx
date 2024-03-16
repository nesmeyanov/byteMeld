import { SectionAbout } from "../../components/SectionAboutUs/SectionAbout";
import { SectionServices } from "../../components/SectionAllServices/SectionServices";
import { SectionForma } from "../../components/SectionFormaContacts/SectionForma";
import { SectionIntro } from "../../components/SectionIntroduction/SectionIntro";
import { SectionPortfolio } from "../../components/SectionPortfolioWorks/SectionPortfolio";

export function Home() {
	return (
		<div id="main">
			<SectionIntro />
			<SectionAbout />
			<SectionServices />
			<SectionPortfolio />
			<SectionForma />
		</div>
	);
}
