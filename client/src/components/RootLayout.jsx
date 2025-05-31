import Header from "../sections/Header";
import Topbar from "../sections/Topbar";
import Footer from "../sections/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Topbar />
      <Header />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
