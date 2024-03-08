import style from "./header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../Icons/logo";
import { useContext, useState, useEffect } from "react";
import { BreakPoint } from "../../../router";
import { scrollUpPage } from "../../../utils/helpers";
import { useTranslation } from "react-i18next";
import { Menu } from "../Menu";
import { Language } from "../Language";
import { Burger } from "../Burger";
import { BurgerMenu } from "../BurgerMenu";
import { useGetArrayObjects } from "../../../utils/hooks";
import { AnimatePresence } from "framer-motion";

export function Header() {
	const { t } = useTranslation();
	const isMobil = useContext(BreakPoint);
	const location = useLocation();

	const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
	function toggleBurgerMenu() {
		setIsOpenBurgerMenu(!isOpenBurgerMenu);
	}

	const { dataMenu } = useGetArrayObjects();

	// відміна прокрутки при відкритому бургер меню
	useEffect(() => {
		if (isOpenBurgerMenu) {
			document.body.classList.add("hidden");
		} else {
			document.body.classList.remove("hidden");
		}
	}, [isOpenBurgerMenu]);

	return (
		<header className={style.header}>
			<div className={style.container}>
				<Link
					{...(location.pathname !== "/" && { to: "/" })}
					className={style.logo}
					onClick={scrollUpPage}
				>
					<Logo />
				</Link>
				{!isMobil && (
					<Menu
						location={location}
						dataMenu={dataMenu}
					/>
				)}
				<div className={style.actions}>
					<Language />
					{!isMobil ? (
						<Link
							className={style.btn_link}
							{...(location.pathname !== "/" && { to: "/" })}
						>
							<button className={style.btn_header}>{t("header.btn")}</button>
						</Link>
					) : (
						<Burger
							toggleBurgerMenu={toggleBurgerMenu}
							isOpenBurgerMenu={isOpenBurgerMenu}
							isMobil={isMobil}
						/>
					)}
				</div>
			</div>
			<AnimatePresence>
				{isMobil && isOpenBurgerMenu && (
					<BurgerMenu
						isOpenBurgerMenu={isOpenBurgerMenu}
						toggleBurgerMenu={toggleBurgerMenu}
						isMobil={isMobil}
						dataMenu={dataMenu}
						location={location}
						t={t}
					/>
				)}
			</AnimatePresence>
		</header>
	);
}
