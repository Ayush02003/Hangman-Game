import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

document.body.style.margin = "0";
document.body.style.fontFamily = "Inter, system-ui, sans-serif";
document.body.style.background =
  "linear-gradient(135deg, #eff6ff 0%, #f8fafc 50%, #eef2ff 100%)";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
