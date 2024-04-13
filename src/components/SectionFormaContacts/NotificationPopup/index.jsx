import style from "./notificationPopup.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { notifAnimation } from "../../../utils/animation";

export function NotificationPopup({ t, onClose }) {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(false);
			onClose();
		}, 5000);

		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<motion.div
			className={`${style.notification} ${show && style.show}`}
			{...notifAnimation}
		>
			<div className={style.text}>{t("forma.notif1")}</div>
			<div className={style.text}>{t("forma.notif2")}</div>
		</motion.div>
	);
}
