import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from './App.tsx'
import Root from "./routes/root-page.tsx";
import OperationDetails from "./routes/operation-details.tsx";
import Operations from "./routes/operations.tsx"
import ErrorPage from "./routes/error-page.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Operations />,
            },
            {
              path: "/operations/:id",
              element: <OperationDetails />,
            },
          ],
        },
      ],
    },
  ],
  { basename: import.meta.env.VITE_BASENAME }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
