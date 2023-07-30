import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/home/Home';
import Chess from './pages/chess/Chess';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/portfolio-website/",
    element: <Home />,
  },
  {
    path: "/portfolio-website/chess",
    element: <Chess />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
