import { createBrowserRouter, Navigate } from "react-router";
import ShopLayaout from "./shop/layout/ShopLayaout";
import HomePage from "./shop/pages/home/HomePage";
import ProductPage from "./shop/pages/product/ProductPage";
import GenderPage from "./shop/pages/gender/GenderPage";
import LoginPage from "./auth/page/login/LoginPage";
import RegisterPage from "./auth/page/register/RegisterPage";
import DashboardPage from "./admin/pages/dashboard/DashboardPage";
import AdminProduct from "./admin/pages/product/AdminProduct";
import AdminProducts from "./admin/pages/products/AdminProducts";
import { lazy } from "react";

const AuthLayout = lazy(() => import("./auth/layout/authLayout"));
const AdmintLayout = lazy(() => import("./admin/layout/AdmintLayout"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ShopLayaout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "gender/:gender",
        element: <GenderPage />,
      },
    ],
  },

  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: "admin",
    element: <AdmintLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "product/:id",
        element: <AdminProduct />,
      },
      {
        path: "products",
        element: <AdminProducts />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
export default appRouter;
