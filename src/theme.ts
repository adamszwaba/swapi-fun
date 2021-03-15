import { createMuiTheme } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: {
      main: "#1c1e22",
    },
  },
});

export default theme;
