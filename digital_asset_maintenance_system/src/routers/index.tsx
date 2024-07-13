import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Auth/Login'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import ResetPassword from '../pages/Auth/ResetPassword'
import MainLayout from '../layouts/MainLayout'
import Devices from '../pages/Main/Devices'
import AddDevice from '../pages/Main/Devices/AddDevice'
import EditDevice from '../pages/Main/Devices/EditDevice'
import ViewDevice from '../pages/Main/Devices/ViewDevice'

// TODO
// Change all hard coded path parameters (1) to actual object ids

const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/devices',
        element: <Devices />
      },
      {
        path: '/devices/add',
        element: <AddDevice />
      },
      {
        path: '/devices/1/edit',
        element: <EditDevice />
      },
      {
        path: 'devices/1',
        element: <ViewDevice />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
        index: true
      },
      {
        path: '/auth/forgot-password',
        element: <ForgotPassword />
      },
      {
        path: '/auth/reset-password',
        element: <ResetPassword />
      }
    ]
  }
])

export default rootRouter
