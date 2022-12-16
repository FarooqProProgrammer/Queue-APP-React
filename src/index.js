import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './pages/Admin';
import Tokens from './pages/Tokens';
import Tokensuser from './pages/Tokensuser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/Admin",
    element:<Admin/>
  },{
    path:"/Token/:id",
    element:<Tokens/>
  },
  {
    path:'/User',
    element:<Tokensuser/>
  }
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
