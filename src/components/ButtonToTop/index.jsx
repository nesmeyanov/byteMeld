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
		const handleScroll = () => {
			const documentHeight = document.documentElement.scrollHeight;
			const windowHeight = window.innerHeight;
			const bottomOffset = documentHeight - windowHeight - 658;

			if (isMobileS && window.scrollY > 100 && window.scrollY < bottomOffset) {
				const scrollDistance = window.scrollY - 100;
				const ratio = scrollDistance / (bottomOffset - 100);
				const newBottomPosition = 170 + ratio * (658 - 170);

				if (buttonRef.current) {
					buttonRef.current.style.bottom = newBottomPosition + "px";
				}
			} else if (!isMobileS) {
				buttonRef.current.style.bottom = "revert-layer";
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isMobileS]);

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
