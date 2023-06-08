import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Login'
import Page1 from './Page1';
import Page2 from './Page2';
import Root from './Root.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
    <Route path="login" element={<Login />} />
    <Route path="app" element={<App />}>
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
    </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
