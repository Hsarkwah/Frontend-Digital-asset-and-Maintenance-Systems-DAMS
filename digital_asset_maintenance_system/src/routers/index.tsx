import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Auth/Login'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import ResetPassword from '../pages/Auth/ResetPassword'
import MainLayout from '../layouts/MainLayout'


const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />
  },
  {
    path: '/auth',
    element: (
      <AuthLayout />
    ),
    children: [
      {
        path: '/auth/login',
        element: <Login />,
        index: true,
      },
      {
        path: '/auth/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/auth/reset-password',
        element: <ResetPassword />,
      }
    ]
  }
])

export default rootRouter
