import style from "./forma.module.scss";
import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormaTypesServicesFields } from "../FormaTypesServicesFields";
import { FormaOutsourcingFields } from "../FormaOutsourcingFields";
import { FormaOutstafFields } from "../FormaOutstafFields";
import { FormaInputFields } from "../FormaInputFields";

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
						<FormaTypesServicesFields
							t={t}
							isStaff={isStaff}
							handleStaff={handleStaff}
						/>

						{!isStaff && (
							<FormaOutsourcingFields
								t={t}
								source={source}
								selectedService={selectedService}
								setSelectedService={setSelectedService}
								budget={budget}
								selectedBudget={selectedBudget}
								setSelectedBudget={setSelectedBudget}
							/>
						)}

						{isStaff && (
							<FormaOutstafFields
								t={t}
								staff={staff}
							/>
						)}

						<FormaInputFields t={t} />
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
