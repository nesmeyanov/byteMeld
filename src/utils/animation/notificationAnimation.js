export const notifAnimation = {
	initial: { opacity: 0, y: 500, x: "-50%" },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3, ease: "easeOut" },
	},
	exit: {
		opacity: 0,
		y: 500,
		transition: { duration: 0.3, ease: "easeIn" },
	},
};
