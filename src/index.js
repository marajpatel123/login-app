import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

const allRoute= new createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/',
    element:<Home/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoute}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
