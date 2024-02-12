import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './context/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import router from './Router/Router.jsx';
// import AuthProvider from './context/AuthProvider.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <AuthProvider>
//     <RouterProvider router={router}>
//       <App />
//     </RouterProvider>
//   </AuthProvider>
// );
