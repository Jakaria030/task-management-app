import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <PrivateRoute><Home /></PrivateRoute>,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
