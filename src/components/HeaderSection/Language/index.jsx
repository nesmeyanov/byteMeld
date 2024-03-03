import style from "./language.module.scss";
import { ArrowDown } from "../../Icons";
import { LOCALS } from "../../../i18n/constants";
import i18next from "i18next";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrapperAnimation, langAnimation } from "../../../utils/animation";

export function Language() {
	const [isShowDropdown, setIsShowDropdown] = useState(false);
	const selectedRef = useRef(null);
	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setIsShowDropdown((prevState) => !prevState);
	};

	const languages = [
		{ code: LOCALS.UK, name: "UA" },
		{ code: LOCALS.EN, name: "EN" },
	];

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				isShowDropdown &&
				selectedRef.current &&
				dropdownRef.current &&
				!selectedRef.current.contains(event.target) && 
				!dropdownRef.current.contains(event.target)
			) {
				setIsShowDropdown(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isShowDropdown]);

	return (
		<div className={`${style.wrapper} ${isShowDropdown && style.active}`}>
			<div
				className={style.selected}
				onClick={toggleDropdown}
				ref={selectedRef}
			>
				<span>
					{languages.find((lang) => lang.code === i18next.language)?.name}
				</span>
				<span className={`${style.arrow} ${isShowDropdown && style.up}`}>
					<ArrowDown />
				</span>
			</div>
			<AnimatePresence>
				{isShowDropdown && (
					<motion.div
						className={style.dropdown}
						ref={dropdownRef}
						{...wrapperAnimation}
					>
						{languages.map(
							(lang, index) =>
								lang.code !== i18next.language && (
									<motion.span
										key={lang.code}
										className={style.dropdownItem}
										onClick={() => i18next.changeLanguage(lang.code)}
										{...langAnimation(index)}
									>
										<span>{lang.name}</span>
									</motion.span>
								)
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
