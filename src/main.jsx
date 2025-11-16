import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
// import theme from "../theme.js";

createRoot(document.getElementById("root")).render(
  // <B theme={theme}>
    <App />
  // </ThemeProvider>
);
