import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// PLUGINS
import "bootstrap/dist/css/bootstrap.min.css";

// CUSTOM SCSS
import "./styles/styles.scss";
import "./styles/utilities.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
