import { Button, TextField } from "@mui/material";

export const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="mainContainer">
      <div style={{ padding: "20px", margin: "20px" }}>
        <form className="formDesign" onSubmit={handleSubmit}>
          <TextField
            label="Ingresa tu nombre"
            name="name"
            size="small"
            variant="standard"
            onChange={handleChange}
            helperText={errors.name}
            error={errors.name ? true : false}
          />
          <TextField
            label="Correo electrónico"
            name="email"
            size="small"
            variant="standard"
            onChange={handleChange}
            helperText={errors.email}
            error={errors.email ? true : false}
          />
          <TextField
            label="Confirmar correo electrónico"
            name="emailConfirm"
            size="small"
            variant="standard"
            onChange={handleChange}
            helperText={errors.emailConfirm}
            error={errors.emailConfirm ? true : false}
          />
          <TextField
            label="Teléfono"
            name="phone"
            size="small"
            variant="standard"
            onChange={handleChange}
            helperText={errors.phone}
            error={errors.phone ? true : false}
          />
          <Button type="submit" style={{ marginTop: "20px" }}>
            Comprar
          </Button>
        </form>
      </div>
    </div>
  );
};
