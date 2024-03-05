// export const charAnimation = (index) => ({
// 	initial: { opacity: 1, x: 0 },
// 	animate: {
// 		opacity: 0,
// 		x: 300,
// 		transition: { delay: 0.2 + index * 0.1, duration: 0.3, ease: "easeOut" },
// 	},
// 	// exit: {
// 	// 	opacity: 0,
// 	// 	x: -300,
// 	// 	transition: { delay: 0.05 + index * 0.1, duration: 0.3, ease: "easeIn" },
// 	// },
// });

// export const wordAnimation = (index) => ({
// 	initial: { opacity: 0, x: -300 },
// 	animate: {
// 		opacity: 1,
// 		x: 0,
// 		transition: { delay: 0.5 + index * 0.1, duration: 0.3, ease: "easeOut" },
// 	},
// 	// exit: {
// 	// 	opacity: 0,
// 	// 	x: -300,
// 	// 	transition: { delay: 0.05 + index * 0.1, duration: 0.3, ease: "easeIn" },
// 	// },
// });

export const borderAnimation = (index) => ({
	hidden: { borderBottomColor: "#E6F5FF" },
	visible: {
		borderBottomColor: "#21A2FF",
		transition: { delay: 0.25 + index * 0.2, duration: 0.4, ease: "easeOut" },
	},
});

export const charAnimation = (index) => ({
	hidden: { opacity: 1, x: 0 },
	visible: {
		opacity: 0,
		x: 300,
		transition: { delay: 0.2 + index * 0.1, duration: 0.3, ease: "easeOut" },
	},
});

export const wordAnimation = (index) => ({
	hidden: { opacity: 0, x: -300 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { delay: 0.5 + index * 0.1, duration: 0.3, ease: "easeOut" },
	},
});