import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar/NavBar";
import { Footer } from "./footer/Footer";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
