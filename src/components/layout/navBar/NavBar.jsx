import "./NavBar.css";
import Button from "@mui/material/Button";
import { CartWidget } from "../../common/CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { menuNavigate } from "../../../routes/menuNavigate";

export const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logoNavBar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dfxmnqvwl/image/upload/v1689738642/logoapp.png"
            alt="Logo"
            style={{ width: "2em", marginLeft: "0.5em" }}
          />
          <h3>A Puro Pedal</h3>
        </Link>
      </div>

      <div>
        {menuNavigate.map(({ id, path, title }) => (
          <Link key={id} to={path}>
            <Button variant="contained" size="medium" style={{ margin: "8px" }}>
              {title}
            </Button>
          </Link>
        ))}
      </div>

      <Link to="/carrito">
        <CartWidget />
      </Link>
    </div>
  );
};
