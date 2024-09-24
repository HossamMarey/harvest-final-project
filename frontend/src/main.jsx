import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AllContextProvider } from "./services/context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllContextProvider>
      <App />
    </AllContextProvider>
  </StrictMode>
);
