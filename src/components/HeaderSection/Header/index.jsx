import style from "./header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../Icons/logo";
import { useContext } from "react";
import { BreakPoint } from "../../../router";
import {scrollUpPage} from "../../../utils/helpers"
import { useTranslation } from "react-i18next";
import { Menu } from "../Menu";
import { Language } from "../Language";

export function Header() {
const{t} = useTranslation()
const isMobil = useContext(BreakPoint)
	const location = useLocation();

	return (
		<header className={style.header}>
			<div className={style.container}>
				<Link
					to="/"
					className={style.logo}
					onClick={scrollUpPage}
				>
					<Logo />
				</Link>
				{!isMobil && <Menu location={location} />}
				<div className={style.actions}>
					<Language />
					{!isMobil && (
						<Link className={style.btn_link} {...(location.pathname !== "/" && { to: "/" })}>
							<button className={style.btn_header}>{t("header.btn")}</button>
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}
