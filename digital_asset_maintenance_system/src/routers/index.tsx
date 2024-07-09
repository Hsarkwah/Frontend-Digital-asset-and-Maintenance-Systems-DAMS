import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Auth/Login'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import ResetPassword from '../pages/Auth/ResetPassword'
// import MainLayout from '../layouts/MainLayout'
import logo from '../assets/images/ghs-logo.jpeg'
import authImage from '../assets/images/close-up-man-repairing-computer-chips.jpg'
import Layout from '../components/Layouts'


const rootRouter = createBrowserRouter([
  {
    path: '/',
    // element: <MainLayout />
  },
  {
    path: '/auth',
    element: <AuthLayout logo={logo} authImage={authImage} title={Layout.title} />,
    children: [
      {
        path: '/auth/login',
        index: true,
        element: <Login />
      },
      {
        path: '/auth/forgot-password',
        index: true,
        element: <ForgotPassword />
      },
      {
        path: '/auth/reset-password',
        index: true,
        element: <ResetPassword />
      }
    ]
  }
])

export default rootRouter
