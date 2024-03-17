import style from "../Forma/forma.module.scss";
import { Field } from "formik";

export function FormaOutstafFields({ t, staff, staffErr }) {

	return (
		<div className={style.staff_box}>
			<h3 className={style.title}>{t("forma.servicesTitle")}</h3>
			<div className={style.servicesList}>
				{staff?.map((item, index) => {
					const option = Object.values(item)[0];
					const id = `staff-${index}`;
					return (
						<label
							htmlFor={id}
							key={id}
							className={style.labelRadio}
						>
							<Field
								id={id}
								type="checkbox"
								name="staff"
								value={option}
								className={style.radioCheck}
							/>
							<span className={style.radioName}>{option}</span>
							<span className={style.customRadio}></span>
						</label>
					);
				})}
				{staffErr && <p className={style.error}>{staffErr}</p>}
			</div>
		</div>
	);
}