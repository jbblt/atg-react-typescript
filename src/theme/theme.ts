import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#F5F5F2",
      secondary: "#46505A",
    },
    action: {
      active: "#0d5aa6",
    },
    primary: {
      main: "#014F9F",
      contrastText: "#CEDCEB",
    },
    secondary: {
      main: "#1C3882",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#014F9F",
          color: "#fff",
        },
      },
    },
  },
});
