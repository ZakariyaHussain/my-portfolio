import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home/Home.jsx';
import MainLayout from './Layout/MainLayout.jsx';
//import { path } from 'framer-motion/client';

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home></Home>,
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
