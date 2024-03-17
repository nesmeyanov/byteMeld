export const scrollTo = (start) => {
	const section = document.querySelector(start);
	const coord =
		section.offsetTop === 0
			? window.scrollY - Math.abs(section.getBoundingClientRect().top) - 50
			: section.offsetTop - 50;
	window.scrollTo({ top: coord, behavor: "smooth" });
};

export const scrollUpPage = () => {
	window.scrollTo({ top: 0, behavor: "smooth" });
};

export const handleChangeRadio = (option, setOption) => {
	setOption(option);
};