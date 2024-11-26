import React from "react";
import ReactDom from "react-dom/client";
import { Login } from "./containers/login";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
