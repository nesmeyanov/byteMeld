import { Route, Routes } from "react-router-dom";
import { MainLayout, Home } from "../pages";
import { createContext } from "react";
import { useMediaQuery } from "react-responsive";
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
				</Route>
			</Routes>
		</BreakPoint.Provider>
	);
}
