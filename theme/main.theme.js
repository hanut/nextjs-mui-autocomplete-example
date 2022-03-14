import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const mainTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
        dark: "#4e12c3",
        light: "#f2f2f2",
      },
      error: {
        main: red.A400,
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      fontSize: 14,
    },
  })
);

export default mainTheme;
