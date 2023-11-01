import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Store from './pages/Store.tsx';
import Header from './component/Header.tsx';
import Footer from './component/Footer.tsx';
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
    path: '/AboutUs',
    element: <AboutUs />
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
