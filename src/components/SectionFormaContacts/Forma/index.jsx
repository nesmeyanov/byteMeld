import { post } from "aws-amplify/api";
import style from "./forma.module.scss";
import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { FormaTypesServicesFields } from "../FormaTypesServicesFields";
import { FormaOutsourcingFields } from "../FormaOutsourcingFields";
import { FormaOutstafFields } from "../FormaOutstafFields";
import { FormaInputFields } from "../FormaInputFields";
import {
	formaSchemaSource,
	formaSchemaStaff,
} from "../../../schemas/formaSchema";
import { NotificationPopup } from "../NotificationPopup";
import { AnimatePresence } from "framer-motion";

export function Forma({ t, source, budget, staff }) {
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

	let validationSchema = isStaff ? formaSchemaStaff(t) : formaSchemaSource(t);

	useEffect(() => {
		isStaff
			? setSelectedTypeService(t("forma.outstaf"))
			: setSelectedTypeService(t("forma.outsourcing"));

		setSelectedBudget(t("forma.budget.option3"));
		setSelectedService(t("forma.source.option2"));
	}, [t, isStaff]);

	const [showNotification, setShowNotification] = useState(false);

	return (
		<div className={style.container_forma}>
			<Formik
				initialValues={{
					...(isStaff ? { staff: [] } : {}),
					fullName: ``,
					email: ``,
					details: ``,
				}}
				validationSchema={validationSchema}
				onSubmit={async (values, { resetForm }) => {
					const order = {
						typeService: selectedTypeService,
						fullName: values.fullName,
						email: values.email,
						details: values.details,
						...(isStaff
							? { staff: values.staff }
							: { services: selectedService, budget: selectedBudget }),
					};

					try {
						const sendForm = await post({
							apiName: "bytemeldAPI",
							path: "/orders",
							options: {
								body: order,
							},
						});

						const { body } = await sendForm.response;
						const data = await body.json();

						console.log("request success: ", data);
						setShowNotification(true);
					} catch (err) {
						console.log("request err", err);
					}

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
								staffErr={formikProps.errors.staff}
							/>
						)}

						<FormaInputFields
							t={t}
							fullNameErr={formikProps.errors.fullName}
							emailErr={formikProps.errors.email}
							detailsErr={formikProps.errors.details}
						/>
						<button
							type="submit"
							className={style.btn_forma}
						>
							{t("forma.btn")}
						</button>

						<AnimatePresence>
							{showNotification && (
								<NotificationPopup
									onClose={() => setShowNotification(false)}
									t={t}
								/>
							)}
						</AnimatePresence>
					</Form>
				)}
			</Formik>
		</div>
	);
}
