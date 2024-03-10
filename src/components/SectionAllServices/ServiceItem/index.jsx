import { useTranslation } from "react-i18next";
import style from "./serviceItem.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

export function ServiceItem({ title, desc }) {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const handleTogleService = () => {
		setIsOpen(!isOpen);
	};

	return (
		<motion.div className={style.service_body}>
			<div className={style.service_header}>
				<h3 className={style.title}>{title}</h3>
				<button
					className={style.btn}
					type="button"
					onClick={handleTogleService}
				>
					{isOpen ? '+' : '-'}
				</button>
			</div>
			<motion.div className={style.hidden}>
				<div className={style.desc}>{desc}</div>
				<button
					className={style.cooperation_btn}
					type="button"
				>
					{t("services.btn")}
				</button>
			</motion.div>
		</motion.div>
	);
}
