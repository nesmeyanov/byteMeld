export const scrollTo = (start) => {
	const section = document.querySelector(start);
	const coord =
		section.offsetTop === 0
			? window.scrollY - Math.abs(section.getBoundingClientRect().top) - 0
			: section.offsetTop - 0;
	window.scrollTo({ top: coord, behavor: "smooth" });
};

export const scrollUpPage = () => {
	window.scrollTo({ top: 0, behavor: "smooth" });
};

export const handleChangeRadio = (option, setOption) => {
	setOption(option);
};

export function formatDate(dateString) {
	const date = new Date(dateString);
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear().toString();
	return `${day}/${month}/${year}`;
}
