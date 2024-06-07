import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home';
import Menu from './pages/Home/Menu/Menu';
import MenuBar from './pages/Menu/MenuBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:
    [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: "menu",
        element: <MenuBar></MenuBar>
      }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <div className='max-w-screen-xl mx-auto'>
 <RouterProvider router={router} />
 </div>
  </React.StrictMode>,
)
