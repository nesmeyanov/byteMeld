import style from "./sectionForma.module.scss";
import { Forma } from "../Forma";
import { Contacts } from "../Contacts";
import { useGetArrayObjects } from "../../../utils/hooks";

export function SectionForma() {
	const { dataFormaSource, dataFormaBudget, dataFormaStaff } =
		useGetArrayObjects();

	return (
		<section
			id="contacts"
			className={style.wrapperForma}
		>
			<div className={style.container}>
				<Contacts />
				<Forma
					source={dataFormaSource}
					budget={dataFormaBudget}
					staff={dataFormaStaff}
				/>
			</div>
		</section>
	);
}
