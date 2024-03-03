export const wrapperAnimation = {
	initial: { opacity: 0, height: 0 },
	animate: {
		opacity: 1,
		transition: { delay: 0.1, duration: 0.3, ease: "easeOut" },
		height: "auto",
	},
	exit: {
		opacity: 0,
		transition: { delay: 0.3, duration: 0.3, ease: "easeIn" },
		height: 0,
	},
};

export const langAnimation = (index) => ({
	initial: { opacity: 0, x: -70 },
	animate: {
		opacity: 1,
		x: 0,
		transition: { delay: 0.1 + index * 0.01, duration: 0.1, ease: "easeOut" },
	},
	exit: {
		opacity: 0,
		x: -70,
		transition: { delay: 0.01 + index * 0.1, duration: 0.3, ease: "easeIn" },
	},
});