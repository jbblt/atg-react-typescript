import { createTheme } from "@mui/material";

const themeBase = createTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    primary: {
      main: "#002f5b",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f1c232",
      contrastText: "#000000",
    },
    background: {
      default: "#ffffff",
      paper: "#f4f6f8",
    },
    text: {
      primary: "#002f5b",
      secondary: "#4a4a4a",
    },
    divider: "#d1d1d1",
  },
});

const themeComponents = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#002f5b",
          color: "#ffffff",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#f4f6f8",
          color: "#002f5b",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: themeBase.palette.primary.contrastText,
          color: themeBase.palette.primary.main,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: themeBase.palette.divider,
          },
        },
      },
    },
  },
});

export const theme = createTheme({
  ...themeBase,
  components: themeComponents.components,
});
