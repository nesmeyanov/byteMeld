import { Outlet } from "react-router-dom";
import { Header } from "../../components/HeaderSection/Header";
import { Footer} from "../../components/FooterSection/Footer";

export function MainLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}