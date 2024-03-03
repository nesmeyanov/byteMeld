import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { Logo } from "../../Icons/logo";
import { useContext } from "react";
import { BreakPoint } from "../../../router";
import {scrollUpPage} from "../../../utils/helpers"
import { useTranslation } from "react-i18next";

export function Header() {
const{t} = useTranslation()
const isMobil = useContext(BreakPoint)

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
				<div className={style.actions}>
					{!isMobil && <button className={style.btn_header}>{t("header.btn")}</button>}
				</div>
			</div>
		</header>
	);
}
