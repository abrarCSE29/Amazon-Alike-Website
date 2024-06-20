import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/Errors/NotFound';
import Shop from './components/Shop_/Shop';
import CartReview from './components/Cart/CartReview';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound/>,
    children : [
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/review',
        element: <CartReview/>
      },
      {
        path: '/review',
        element: <h1>Review</h1>
      },
      {
        path: '/manage',
        element: <h1>Manage Review</h1>
      },
      {
        path: '/orderconfirm/:name',
        element: <OrderConfirmation/>
      },

    ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
