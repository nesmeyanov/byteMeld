import { useTranslation } from "react-i18next"
import style from "./sectionServices.module.scss"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {Outsourcing} from "../Outsourcing";
import {Outstaf} from "../Outstaf";

export function SectionServices() {
	const {t} = useTranslation();

	return (
		<section
			id="service"
			className={style.wrapperServices}
		>
			<div className={style.container}>
				<Tabs className={style.box_service}>
					<TabList className={style.service_tabs}>
						<Tab className={style.service_item}>
							{t("services.title1")}
						</Tab>
						<Tab className={style.service_item}>
							{t("services.title2")}
						</Tab>
					</TabList>
					<TabPanel>
						<Outsourcing/>
					</TabPanel>
					<TabPanel>
						<Outstaf/>
					</TabPanel>
				</Tabs>
			</div>
		</section>
	);
}