import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";

import Dashboard from "../pages/Dashboard";
import Diagnosis from "../pages/Diagnosis";
import Prediction from "../pages/Prediction";
import Marketplace from "../pages/Marketplace";
import Simulation from "../pages/Simulation";
import Chat from "../pages/Chat";
import Settings from "../pages/Settings";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/diagnosis",
        element: <Diagnosis />,
      },
      {
        path: "/prediction",
        element: <Prediction />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/simulation",
        element: <Simulation />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);