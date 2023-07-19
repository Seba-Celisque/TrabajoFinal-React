import "./Footer.css";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <div className={"footer"}>
        <h4>Create by Sebastian Celisque</h4>
        <div className="redes">
          <a href="#" target="_blank">
            <BsFacebook style={{ color: "#ffffff" }} />
          </a>
          <a href="#" target="_blank">
            <BsInstagram style={{ color: "#ffffff" }} />
          </a>
          <a href="#" target="_blank">
            <BsWhatsapp style={{ color: "#ffffff" }} />
          </a>
        </div>
      </div>
    </>
  );
};
