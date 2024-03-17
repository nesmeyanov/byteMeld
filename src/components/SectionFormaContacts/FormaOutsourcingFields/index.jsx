import style from "../Forma/forma.module.scss";
import { Field } from "formik";
import { handleChangeRadio } from "../../../utils/helpers";

export function FormaOutsourcingFields({
	t,
	source,
	selectedService,
	budget,
	selectedBudget,
}) {
	return (
		<div className={style.source_container}>
			<div className={style.services_box}>
				<h3 className={style.title}>{t("forma.servicesTitle")}</h3>
				<div className={style.servicesList}>
					{source?.map((service, index) => {
						const option = Object.values(service)[0];
						const id = `service-${index}`;
						return (
							<label
								htmlFor={id}
								key={id}
								className={style.labelRadio}
							>
								<Field
									id={id}
									type="radio"
									name="services"
									value={option}
									className={style.radioCheck}
									checked={selectedService === option}
									onChange={() => handleChangeRadio(option, selectedService)}
								/>
								<span className={style.radioName}>{option}</span>
								<span className={style.customRadio}></span>
							</label>
						);
					})}
				</div>
			</div>
			<div className={style.budget_box}>
				<h3 className={style.title}>{t("forma.budgetTitle")}</h3>
				<div className={style.budgetList}>
					{budget?.map((item, index) => {
						const option = Object.values(item)[0];
						const id = `budget-${index}`;
						return (
							<label
								htmlFor={id}
								key={id}
								className={style.labelRadio}
							>
								<Field
									id={id}
									type="radio"
									name="budget"
									value={option}
									className={style.radioCheck}
									checked={selectedBudget === option}
									onChange={() => handleChangeRadio(option, selectedBudget)}
								/>
								<span className={style.radioName}>{option}</span>
								<span className={style.customRadio}></span>
							</label>
						);
					})}
				</div>
			</div>
		</div>
	);
}
