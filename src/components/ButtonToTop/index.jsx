import styles from "./buttonToTop.module.scss";
import { useState, useEffect } from "react";
import {scrollTo} from "../../utils/helpers";
import {ArrowUp} from "../../components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import {buttonAnimation} from "../../utils/animation";

export default function BackToTopButton() {
	const [backToTop, setBacktoTop] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setBacktoTop(true);
			} else {
				setBacktoTop(false);
			}
		});
	}, []);

	return (
		<AnimatePresence>
			{backToTop && (
				<>
					<motion.button
						{...buttonAnimation}
						className={styles.button}
						onClick={() => scrollTo("body")}
					>
						<ArrowUp />
					</motion.button>
				</>
			)}
		</AnimatePresence>
	);
}

