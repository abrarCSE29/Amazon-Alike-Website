import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/Errors/NotFound";
import Shop from "./components/Shop_/Shop";
import CartReview from "./components/Cart/CartReview";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import { UserProvider } from "./components/Context/UserContext";
import PreviousOrders from "./components/PreviousOrders/PreviousOrders";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/review",
        element: <CartReview />,
      },
      {
        path: "/review",
        element: <h1>Review</h1>,
      },
      {
        path: "/manage",
        element: <PreviousOrders/>
      },
      {
        path: "/orderconfirm",
        element: <OrderConfirmation />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
