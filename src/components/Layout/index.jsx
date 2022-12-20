import { Outlet } from "react-router-dom";
import Footer from "./../Footer";
import Navbar from "./../Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
