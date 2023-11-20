import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from './App.tsx'
import Root from "./routes/root-page.tsx";
import IndexPage from "./routes/index-page.tsx";
import Operations from "./routes/operations.tsx";
import OperationDetails from "./routes/operation-details.tsx";
import ErrorPage from "./routes/error-page.tsx";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./helpers/CustomTheme.tsx";

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
              element: <IndexPage />,
            },
            {
              path: "/list",
              element: <Operations />,
            },
            {
              path: "/detail/:id",
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
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
