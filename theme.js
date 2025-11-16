import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff7e6b", // Soft Coral
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#6c63ff", // Pastel Violet
      contrastText: "#ffffff",
    },
    background: {
      default: "#faf7f5", // Page background
      paper: "#ffffff", // Cards, AppBar, Paper
    },
    text: {
      primary: "#2c2c2c",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: "none" }, 
  },
  shape: {
    borderRadius: 16, 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        },
      },
    },
  },
});

export default theme;
