import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

// GitHub Pages SPA fallback: 404.html stashes the deep link; restore it here.
const stashed = sessionStorage.getItem("spa-redirect");
if (stashed) {
  sessionStorage.removeItem("spa-redirect");
  if (stashed !== window.location.pathname) {
    window.history.replaceState(null, "", stashed);
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
