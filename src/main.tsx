import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Store from './pages/Store.tsx';
import Header from './component/Header.tsx';
import Footer from './component/Footer.tsx';
import CartProvider from './context/CartProvider.tsx';
import Cart from './pages/Cart.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/store',
    element: <Store />
  },
  {
    path: '/aboutUs',
    element: <AboutUs />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </CartProvider>
  </React.StrictMode>
);
