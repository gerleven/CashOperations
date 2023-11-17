import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from './App.tsx'
import Root from "./routes/root-page.tsx";
import Index from "./routes/index-page.tsx";
import OperationDetails from "./routes/operation-details.tsx";
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
              element: <Index />,
            },
            {
              path: "/:operationId",
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
