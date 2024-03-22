import { useTranslation } from "react-i18next";
import style from "./serviceItem.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { bodyAnimation, hiddenAnimation } from "../../../utils/animation";

export function ServiceItem({ title, desc, expanded, setExpanded , index}) {
	const { t } = useTranslation();
	const isOpen = index === expanded;

	return (
		<motion.div
			className={`${style.service_body} ${isOpen && style.active}`}
			initial={false}
			animate={isOpen ? "visible" : "hidden"}
			variants={bodyAnimation}
			onClick={() => setExpanded(isOpen ? false : index)}
		>
			<div className={`${style.service_header} ${isOpen && style.active}`}>
				<h3 className={style.title}>{title}</h3>
				<button
					className={style.btn}
					type="button"
				>
					{isOpen ? "+" : "-"}
				</button>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={style.hidden}
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={hiddenAnimation}
					>
						<div className={style.desc}>{desc}</div>
						<button
							className={style.cooperation_btn}
							type="button"
							data-id={"#contacts"}
						>
							{t("services.btn")}
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
