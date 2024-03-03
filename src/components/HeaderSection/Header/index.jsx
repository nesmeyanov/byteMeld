import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { Logo } from "../../Icons/logo";

export function Header() {

	return (
		<header className={style.header}>
			<div className={style.container}>
				<Link to='/'>
					<Logo />
				</Link>

			</div>
		</header>
	);
}
