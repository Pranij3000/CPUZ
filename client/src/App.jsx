import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Homepage from "./pages/HomePage.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CustomerLogin from "./pages/CustomerLogin.jsx";
import CustomerSignUp from "./pages/CustomerSignUp.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact-us" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<CustomerLogin></CustomerLogin>}></Route>
          <Route path="/register" element={<CustomerSignUp></CustomerSignUp>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
