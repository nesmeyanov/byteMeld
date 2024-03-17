import style from "../Forma/forma.module.scss";
import { Field } from "formik";

export function FormaInputFields({ t }) {
	
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
			</label>
		</div>
	);
}