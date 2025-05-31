import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

// PAGES
import Homepage from "./pages/HomePage.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CustomerLogin from "./pages/CustomerLogin.jsx";
import CustomerSignUp from "./pages/CustomerSignUp.jsx";
import BuildYourPc from "./pages/BuildYourPc.jsx";
import ComponentsListing from "./pages/ComponentsListing.jsx";
import SellerRegistration from "./pages/SellerRegistration.jsx";
import RootLayout from "./components/RootLayout.jsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout children={<Homepage />} />}></Route>
          <Route path="*" element={<RootLayout children={<Error />} />}></Route>
          <Route path="/about" element={<RootLayout children={<About />} />}></Route>
          <Route path="/contact-us" element={<RootLayout children={<Contact />} />}></Route>
          <Route path="/login" element={<RootLayout children={<CustomerLogin />} />}></Route>
          <Route path="/register" element={<RootLayout children={<CustomerSignUp />} />}></Route>
          <Route path="/build-your-pc" element={<RootLayout children={<BuildYourPc />} />}></Route>
          <Route path="/components-listing" element={<RootLayout children={<ComponentsListing />} />}></Route>
          <Route path="/become-a-seller" element={<RootLayout children={<SellerRegistration />} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
