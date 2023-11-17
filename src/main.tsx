import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// @ts-ignore;
const BASENAME = CONFIG_BASENAME;
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
  ],
  {basename: BASENAME}
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
