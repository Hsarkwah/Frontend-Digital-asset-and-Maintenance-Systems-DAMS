/**
 * @file MainLayout.tsx is a component that renders the main layout
 *  of the application
 * @since 2021-04-01
 * @version 1.0
 * @description The MainLayout component is responsible for rendering the
 * main layout of the application. It is a parent component to the Header,
 * SideNavbar, and Layouts components.
 * @exports MainLayout
 * @component
 * @return {JSX.Element} - Rendered component
 * @example
 * return (
 * <MainLayout />)
 *
 */

import Header from '../components/Header'
import SideNavbar from '../components/SideNavbar'
import Layouts from '../components/Layouts'
import logo from '../assets/images/ghs-logo.jpeg'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <section className='relative w-[100%] h-[100%]'>
      <Header logo={logo} title={Layouts.title} />
      <SideNavbar />
      <Outlet />
    </section>
  )
}

export default MainLayout
