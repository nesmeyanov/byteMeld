import { ServiceItem } from "../ServiceItem";

export function Outstaf({ data, expanded, setExpanded }) {
	return (
		<>
			{data.map((menu, index) =>
				Object.keys(menu).map((key) => {
					const { title, desc } = menu[key];
					if (title) {
						return (
							<ServiceItem
								key={title}
								index={index}
								title={title}
								desc={desc}
								expanded={expanded}
								setExpanded={setExpanded}
							/>
						);
					}
					return null;
				})
			)}
		</>
	);
}
