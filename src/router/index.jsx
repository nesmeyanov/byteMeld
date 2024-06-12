import { Route, Routes } from "react-router-dom";
import { MainLayout, Home } from "../pages";
import { createContext } from "react";
import { useMediaQuery } from "react-responsive";
// import { Blog } from "../pages/Blog";
// import { Article } from "../pages/Article";
export const BreakPoint = createContext();

export default function Router() {
	// прапор для компонентів, щоб не рендерити іх на мобільних застосунках
	const isMobile = useMediaQuery({ maxWidth: 991 });

	return (
		<BreakPoint.Provider value={isMobile}>
			<Routes>
				<Route
					path="/"
					element={<MainLayout />}
				>
					<Route
						index
						element={<Home />}
					/>
					{/* <Route
						path="/blog"
						element={<Blog />}
					/> */}
					{/* <Route
						path="/blog/:slug"
						element={<Article />}
					/> */}
				</Route>
			</Routes>
		</BreakPoint.Provider>
	);
}
