import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import theme from './theme';
import Home from './pages/home/Home';
import Chess from './pages/chess/Chess';
import Microblog from './pages/microblog/Microblog';
import MainLayout from './layouts/MainLayout';

const router = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chess",
        element: <Chess />,
      },
      {
        path: "/microblog",
        element: <Microblog />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);