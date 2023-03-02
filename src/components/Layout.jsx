import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => (
  <div className="layout">
    <Header />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
