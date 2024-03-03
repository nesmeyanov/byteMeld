import { Route, Routes } from "react-router-dom";
import { MainLayout, Home } from "../pages";

export default function Router() {
	return (
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
	);
}
