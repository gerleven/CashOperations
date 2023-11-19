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

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#3483FA", light: "#009EE3" },
    secondary: { main: "rgba(65, 137, 230, 0.15);" },
    common: { black: "rgba(0, 0, 0, 0.90);", white: "#FFFFFF" },
    grey: { 200: "#EDEDED", 600: "rgba(0, 0, 0, 0.55);" },
  },
  components: {
    MuiButton: {},
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 14,
  },
});

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
    ;
  </React.StrictMode>
);
