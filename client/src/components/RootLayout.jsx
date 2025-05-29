import Header from "../sections/Header";
import Topbar from "../sections/Topbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Topbar />
      <Header />
      <main>{children}</main>
    </>
  );
}
