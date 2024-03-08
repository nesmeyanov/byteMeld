import style from "./footer.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../Icons/logo";
import { scrollUpPage } from "../../../utils/helpers";
import { useGetArrayObjects } from "../../../utils/hooks";
import { Policy } from "../Policy";
import { MenuFooter } from "../MenuFooter";

export function Footer() {
	const location = useLocation(); 
	const { dataFooter } = useGetArrayObjects();

	return (
		<footer className={style.footer}>
			<div className={style.wrapperMenu}>
				<div className={style.container}>
					<Link
						{...(location.pathname !== "/" && { to: "/" })}
						className={style.logo}
						onClick={scrollUpPage}
					>
						<Logo />
					</Link>
					<MenuFooter
						location={location}
						dataFooter={dataFooter}
					/>
				</div>
			</div>
			<div className={style.wrapperPolicy}>
				<Policy />
			</div>
		</footer>
	);
}