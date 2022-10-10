import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ThemeContextProvider} from "./context/themeContext"

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';

import ErrorPage from './components/ErrorPage';
import Search from './components/Search';
import Suggest from './components/Suggest';
import Contact from './components/Contact';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemeContextProvider><App /></ThemeContextProvider>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Search />
      },
      {
        path: "add",
        element: <Suggest />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
