import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routers from "./Routers"
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
// import LoadingSpinner from "./Components/loadingspinner/LoaderSpinner";
import Loader from "./pages/loader/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Loader />
        <Routers />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
