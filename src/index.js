import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routers from "./Routers"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </React.StrictMode>
);
