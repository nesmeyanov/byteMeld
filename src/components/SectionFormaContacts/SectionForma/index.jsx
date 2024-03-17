import style from "./sectionForma.module.scss";
import { Forma } from "../Forma";
import { Contacts } from "../Contacts";
import { useContext} from "react";
import { BreakPoint } from "../../../router";
import { useTranslation } from "react-i18next";
import { useGetArrayObjects } from "../../../utils/hooks";

export function SectionForma() {
	const { dataFormaSource, dataFormaBudget, dataFormaStaff } =
		useGetArrayObjects();
const { t } = useTranslation();
const isMobil = useContext(BreakPoint);

	return (
		<section
			id="contacts"
			className={style.wrapperForma}
		>
			<div className={style.container}>
				<Contacts t={t}/>
				{isMobil && <h2 className={style.tell}>{t("forma.tell")}</h2>}
				<Forma
					t={t}
					source={dataFormaSource}
					budget={dataFormaBudget}
					staff={dataFormaStaff}
				/>
			</div>
		</section>
	);
}
