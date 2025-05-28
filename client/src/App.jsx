import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Homepage from "./pages/HomePage.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CustomerLogin from "./pages/CustomerLogin.jsx";
import CustomerSignUp from "./pages/CustomerSignUp.jsx";
import BuildYourPc from "./pages/BuildYourPc.jsx";
import Components from "./pages/Components.jsx";
import SellerRegistration from "./pages/SellerRegistration.jsx";
import RootLayout from "./components/layouts/RootLayout/index.jsx";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="*" element={<Error />}></Route>
					<Route
						path="/about"
						element={
							<RootLayout>
								<About />
							</RootLayout>
						}></Route>
					<Route path="/contact-us" element={<Contact />}></Route>
					<Route path="/login" element={<CustomerLogin />}></Route>
					<Route path="/register" element={<CustomerSignUp />}></Route>
					<Route path="/build-your-pc" element={<BuildYourPc />}></Route>
					<Route path="/components" element={<Components />}></Route>
					<Route path="/become-a-seller" element={<SellerRegistration />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
