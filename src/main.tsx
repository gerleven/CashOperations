import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root-page.tsx";
import IndexPage from "./routes/index-page.tsx";

import Operations from "./routes/operations.tsx";
import {
  loader as operationsLoader,
  action as operationsAction,
} from "./routes/operations.tsx";

import OperationDetails from "./routes/operation-details.tsx";
import {
  loader as operationsDetailLoader,
  action as operationsDetailAction,
} from "./routes/operation-details.tsx";

import ErrorPage from "./routes/error-page.tsx";
import RoutingErrorPage from "./routes/routing-error-page.tsx";
import ApiNotWorking from "./routes/api-not-working.tsx";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./helpers/CustomTheme.tsx";
import About from "./routes/about-page.tsx";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <RoutingErrorPage />,
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
              loader: operationsLoader,
              action: operationsAction,
            },
            {
              path: "/detail/:id",
              element: <OperationDetails />,
              loader: operationsDetailLoader,
              action: operationsDetailAction,
            },
            {
              path: "/api-not-working",
              element: <ApiNotWorking />,
            },
            {
              path: "/about",
              element: <About />,
            },
          ],
        },
      ],
    },
  ],
  { basename: "/" }
  // { basename: import.meta.env.VITE_BASENAME }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
