import style from "../Forma/forma.module.scss";
import { Field } from "formik";

export function FormaInputFields({ t, fullNameErr, emailErr, detailsErr }) {

	return (
		<div className={style.input_box}>
			<label
				htmlFor=""
				className={style.labelInput}
			>
				<Field
					type="text"
					name="fullName"
					placeholder={t("forma.fullName")}
					className={style.input}
				/>
				{fullNameErr && <p className={style.error}>{fullNameErr}</p>}
			</label>
			<label
				htmlFor=""
				className={style.labelInput}
			>
				<Field
					type="email"
					name="email"
					placeholder={t("forma.email")}
					className={style.input}
				/>
				{emailErr && <p className={style.error}>{emailErr}</p>}
			</label>
			<label
				htmlFor=""
				className={style.labelTextArea}
			>
				<Field
					as="textarea"
					name="details"
					placeholder={t("forma.details")}
					className={style.textArea}
				/>
				{detailsErr && <p className={style.error}>{detailsErr}</p>}
			</label>
		</div>
	);
}