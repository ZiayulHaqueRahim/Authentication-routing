import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import AuthProvider from './Components/Providers/AuthProvider';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
          <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
