import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Homepage from "./pages/HomePage.jsx";
import Error from "./pages/Error.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
