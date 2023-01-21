import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Translate from "./pages/Translate";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/translate",
    element: <Translate />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
