import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#333636",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Acme",
  },
  spacing: 8,
});
