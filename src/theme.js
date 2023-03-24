import { createTheme } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: yellow[800],
    },
  },
});

export default theme;
