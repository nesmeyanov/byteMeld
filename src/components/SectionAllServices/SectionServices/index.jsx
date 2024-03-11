import { useTranslation } from "react-i18next";
import style from "./sectionServices.module.scss";
import "./tabs.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Outsourcing } from "../Outsourcing";
import { Outstaf } from "../Outstaf";
import { useGetArrayObjects } from "../../../utils/hooks";
import { useState } from "react";

export function SectionServices() {
	const { t } = useTranslation();
	const { dataOutsourcing, dataOutstaf } = useGetArrayObjects();
	const [expanded, setExpanded] = useState(0);

	return (
		<section
			id="service"
			className={style.wrapperServices}
		>
			<div className={style.container}>
				<Tabs className={style.box_service}>
					<TabList className={style.service_tabs}>
						<Tab className={style.service_item}>{t("services.title1")}</Tab>
						<Tab className={style.service_item}>{t("services.title2")}</Tab>
					</TabList>
					<TabPanel>
						<Outsourcing
							data={dataOutsourcing}
							expanded={expanded}
							setExpanded={setExpanded}
						/>
					</TabPanel>
					<TabPanel>
						<Outstaf
							data={dataOutstaf}
							expanded={expanded}
							setExpanded={setExpanded}
						/>
					</TabPanel>
				</Tabs>
			</div>
		</section>
	);
}
