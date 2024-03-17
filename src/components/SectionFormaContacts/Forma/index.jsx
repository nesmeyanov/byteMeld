import style from "./forma.module.scss";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Forma({ source, budget, staff }) {
	const { t } = useTranslation();

	const [isStaff, setIsStaff] = useState(false);
	const handleStaff = () => setIsStaff(!isStaff);
	

	const [selectedService, setSelectedService] = useState(`service-1`);
	const handleServiceChange = (id) => {
		setSelectedService(id);
	};

	const [selectedBudget, setSelectedBudget] = useState(`budget-2`);
	const handleBudgetChange = (id) => {
		setSelectedBudget(id);
	};

	console.log(staff);

	return (
		<div className={style.container_forma}>
			<Formik initialValues={{}}>
				<Form className={style.form}>
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
									checked={!isStaff && true}
								/>
								<span className={style.radioName}>
									{t("forma.outsourcing")}
								</span>
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
									checked={isStaff && true}
								/>
								<span className={style.radioName}>{t("forma.outstaf")}</span>
								<span
									className={style.customRadio}
									onClick={handleStaff}
								></span>
							</label>
						</div>
					</div>
					{!isStaff && (
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
													checked={selectedService === id}
													onChange={() => handleServiceChange(id)}
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
													checked={selectedBudget === id}
													onChange={() => handleBudgetChange(id)}
												/>
												<span className={style.radioName}>{option}</span>
												<span className={style.customRadio}></span>
											</label>
										);
									})}
								</div>
							</div>
						</div>
					)}

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
						<label htmlFor="" className={style.labelInput}>
							<Field
								type="email"
								name="email"
								placeholder={t("forma.email")}
								className={style.input}
							/>
						</label>
						<label htmlFor="" className={style.labelTextArea}>
							<Field
								as="textarea"
								name="details"
								placeholder={t("forma.details")}
								className={style.textArea}
							/>
						</label>
					</div>
					<button
						type="submit"
						className={style.btn_forma}
					>
						{t("forma.btn")}
					</button>
				</Form>
			</Formik>
		</div>
	);
}
