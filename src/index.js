import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { appRouter } from "./Routes/routes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //In strict mode everything runs twice, to ensure that your components behave properly

  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
