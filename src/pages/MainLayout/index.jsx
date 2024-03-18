import { Outlet } from "react-router-dom";
import { Header } from "../../components/HeaderSection/Header";
import { Footer } from "../../components/FooterSection/Footer";
import BackToTopButton from "../../components/ButtonToTop";

export function MainLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<BackToTopButton />
			<Footer />
		</>
	);
}
