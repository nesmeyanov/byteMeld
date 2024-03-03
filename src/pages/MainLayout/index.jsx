import { Outlet } from "react-router-dom";
import { Header } from "../../components/HeaderSection";
import { Footer } from "../../components/FooterSection";

export function MainLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}