import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Homepage from './com/Homepage/Homepage';
import Main from './com/Main/Main';
import Login from './com/Login/Login';
import Registration from './com/Registration/Registration';
import Auth from './com/Authprovider/Auth';
import Blog from './com/Blog/Blog';
import Error from './com/Error page/Error';
import Private from './com/Privateroute/Private';
import Addtoy from './com/addtoy/Addtoy';
import Indeng from './com/indeng/Indeng';
import Indmath from './com/indmath/Indmath';
import Indlanguage from './com/Indlanguage/Indlanguage';
import Alltoys from './com/Alltoys/Alltoys';
import Toydetails from './com/Toydetails/Toydetails';
import Mytoys from './com/Mytoys/Mytoys';
import Update from './com/update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/blog",
        element: <Private><Blog></Blog></Private>
      },
      {
        path: "/addtoy",
        element: <Private><Addtoy></Addtoy></Private>
      },
      {
        path: "/alltoys",
        element: <Alltoys></Alltoys>,
        loader: () => fetch("https://serversite-pi.vercel.app/totaltoys")
      },
      {
        path: "/eng/:id",
        element: <Private><Indeng></Indeng></Private>,
        loader: ({params}) => fetch(`https://serversite-pi.vercel.app/eng/${params.id}`)
      },
      {
        path: "/math/:id",
        element: <Private><Indmath></Indmath></Private>,
        loader: ({params}) => fetch(`https://serversite-pi.vercel.app/math/${params.id}`)
      },
      {
        path: "/language/:id",
        element: <Private><Indlanguage></Indlanguage></Private>,
        loader: ({params}) => fetch(`https://serversite-pi.vercel.app/math/${params.id}`)
      },
      {
        path: "/toydetails/:id",
        element: <Private><Toydetails></Toydetails></Private>,
        loader: ({params}) => fetch(`https://serversite-pi.vercel.app/alltoys/${params.id}`)
      },
      {
        path: "/mytoys",
        element: <Private><Mytoys></Mytoys></Private>,
      },
      {
        path: "/update/:id",
        element: <Private><Update></Update></Private>,
        loader: ({params}) => fetch(`https://serversite-pi.vercel.app/alltoys/${params.id}`)
      }
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth>
      <RouterProvider router={router} />
    </Auth>
  </React.StrictMode>
)
