import { RouterProvider } from "react-router";

import appRouter from "./app.router";

const Shop = () => {
  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Shop;
