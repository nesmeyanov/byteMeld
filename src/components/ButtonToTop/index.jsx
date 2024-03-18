/* eslint-disable no-undef */
import styles from "./buttonToTop.module.scss";
import { useState, useEffect, useRef } from "react";
import { scrollTo } from "../../utils/helpers";
import { ArrowUp } from "../../components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { buttonAnimation } from "../../utils/animation";
import { useMediaQuery } from "react-responsive";

export default function BackToTopButton() {
	const [backToTop, setBacktoTop] = useState(false);
	const isMobileS = useMediaQuery({ maxWidth: 768 });
	const buttonRef = useRef(null);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setBacktoTop(true);
			} else {
				setBacktoTop(false);
			}

			if (
				isMobileS &&
				buttonRef.current &&
				window.innerHeight + window.scrollY >=
					document.documentElement.scrollHeight
			) {
				buttonRef.current.style.bottom = "658px";
			} else if (
				isMobileS &&
				buttonRef.current &&
				window.innerHeight + window.scrollY <
					document.documentElement.scrollHeight
			) {
				buttonRef.current.style.bottom = "170px";
			} else if (!isMobileS && buttonRef.current) {
				buttonRef.current.style.bottom = "revert-layer";
			}
		});
	}, [isMobileS]);

	return (
		<AnimatePresence>
			{backToTop && (
				<>
					<motion.button
						ref={buttonRef}
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
