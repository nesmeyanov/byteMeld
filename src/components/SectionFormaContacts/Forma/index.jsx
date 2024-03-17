import style from "./forma.module.scss";
import { Formik, Field, Form } from "formik";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Forma({ source, budget, staff }) {
	const { t } = useTranslation();

	const [isStaff, setIsStaff] = useState(false);
	const handleStaff = () => setIsStaff(!isStaff);

	const [selectedTypeService, setSelectedTypeService] = useState(
		t("forma.outsourcing")
	);

	const [selectedService, setSelectedService] = useState(
		t("forma.source.option2")
	);

	const [selectedBudget, setSelectedBudget] = useState(
		t("forma.budget.option3")
	);

	useEffect(() => {
		isStaff
			? setSelectedTypeService(t("forma.outstaf"))
			: setSelectedTypeService(t("forma.outsourcing"));

		setSelectedBudget(t("forma.budget.option3"));
		setSelectedService(t("forma.source.option2"));
	}, [t, isStaff]);
	const handleServiceChange = (option) => {
		setSelectedService(option);
	};

	
	const handleBudgetChange = (option) => {
		setSelectedBudget(option);
	};

	return (
		<div className={style.container_forma}>
			<Formik
				initialValues={{
					staff: [],
					fullName: ``,
					email: ``,
					details: ``,
				}}
				onSubmit={(values, { resetForm }) => {
					const order = {
						typeService: selectedTypeService,
						fullName: values.fullName,
						email: values.email,
						details: values.details,
						...(isStaff
							? { staff: values.staff }
							: { services: selectedService, budget: selectedBudget }),
					};

					console.log(order);
					
					resetForm();
				}}
			>
				{(formikProps) => (
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
										checked={!isStaff}
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
														checked={selectedService === option}
														onChange={() => handleServiceChange(option)}
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
														onChange={() => handleBudgetChange(option)}
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

						{isStaff && (
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
						<button
							type="submit"
							className={style.btn_forma}
						>
							{t("forma.btn")}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
