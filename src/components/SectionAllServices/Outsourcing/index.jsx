import style from "./outsourcing.module.scss"
import { ServiceItem } from "../ServiceItem"

export function Outsourcing({data}) {
	return (
		<div className={style.wrapper}>
			{data.map((menu) =>
				Object.keys(menu).map((key) => {
					const { title, desc } = menu[key];
					if (title) {
						return (
							<ServiceItem
								key={title}
								title={title}
								desc={desc}
							/>
						);
					}
					return null;
				})
			)}
		</div>
	);
}