export const wrapperBurger = {
	initial: {
		opacity: 0,
		clipPath: "inset(0% 95% 95% 0% round 10px)",
	},
	animate: {
		opacity: 1,
		clipPath: "inset(0% 0% 0% 0% round 10px)",
		transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
	},
	exit: {
		opacity: 1,
		clipPath: "inset(0% 95% 95% 0% round 10px)",
		transition: { delay: 0.3, duration: 0.5, ease: "easeIn" },
	},
};
