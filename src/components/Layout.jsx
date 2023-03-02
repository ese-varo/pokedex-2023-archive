import { Outlet } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => (
  <div className="layout">
    <Header />
    <div className="container">
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </div>
    <Footer />
  </div>
);

export default Layout;
