import { Button } from "@mui/material";
import {} from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const FirebaseAuth = () => {
  const navigate = useNavigate();

  let infoInput = {
    email: "seba.celisque@gmail.com",
    password: "123456",
  };

  const handleSubmit = async () => {
    // eslint-disable-next-line no-undef
    let res = await login(infoInput);
    console.log(res);
    navigate("/");
  };

  return (
    <div>
      <h1>Estoy en el login</h1>
      <Button onClick={handleSubmit}>Ingresar</Button>
      <h2>Aun no tienes cuenta?</h2>
      <Button>Registrarse</Button>
    </div>
  );
};
