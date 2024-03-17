import style from "../Forma/forma.module.scss"
import { Field} from "formik";

export function FormaTypesServicesFields({t, isStaff, handleStaff}) {
	return (
		<div className={style.typeServices}>
			<h3 className={style.title}>{t("forma.typeServices")}</h3>
			<div className={style.typeList}>
				<label
					htmlFor=""
					className={style.labelRadio}
				>
					<Field
						type="radio"
						name="typeService"
						value={t("forma.outsourcing")}
						className={style.radioCheck}
						checked={!isStaff}
					/>
					<span className={style.radioName}>{t("forma.outsourcing")}</span>
					<span
						className={style.customRadio}
						onClick={handleStaff}
					></span>
				</label>
				<label
					htmlFor=""
					className={style.labelRadio}
				>
					<Field
						type="radio"
						name="typeService"
						value={t("forma.outstaf")}
						className={style.radioCheck}
						checked={isStaff}
					/>
					<span className={style.radioName}>{t("forma.outstaf")}</span>
					<span
						className={style.customRadio}
						onClick={handleStaff}
					></span>
				</label>
			</div>
		</div>
	);
}