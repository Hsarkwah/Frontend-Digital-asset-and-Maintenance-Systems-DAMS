import Header from '../components/Header'
// import SideNavbar from '../components/SideNavbar'
import Layouts from '../components/Layouts'
import logo from '../assets/images/ghs-logo.jpeg'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBarList from '../components/Layout/SideBarList'
import { useState } from 'react'
import React from 'react'


// const outletContainer = () => <div style={{}}></div>

const MainLayout = () => {
  // const navigate = useNavigate()

  const [menuList, setMenuList] = useState<MainLayoutMenuOption[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  React.useEffect(() => {
    const menu = MainLayoutMenuData.get(menuOption);
    if (menu) setMenuList(menu);
  }, [])

  function onMenuClick(menu: MenuOption, index: number) {
    console.log(`Item ---> ${menu.title} Pressed`)
    setSelectedMenu(`${index}`);

    // navigate(menu.path)
  };

  function onLogoClick() {
    console.log('Logout Button Pressed !!!')
  };


  return (
    <section className={styles.layoutSection}>
      <Header logo={logo} title={Layouts.title} />
      {/* <SideNavbar /> */}
      <SideBarList
        ItemList={menuList}
        onItemClick={onMenuClick}
        selectedItem={selectedMenu}
        onLogoutClick={onLogoClick}
      />
      {/* TO DO : Bound Outlet in a View */}
      <Outlet />
    </section>
  )
}

export type MenuOption = {
  title: string;
  path: string;
};

type MainLayoutMenuOption = {
  title: string;
  path: string;
};

type MainLayoutMenuGroup = 'user-1' | 'user-2' | 'user-3' | 'user-4' | 'user-5';

const MainLayoutMenuData = new Map<MainLayoutMenuGroup, MainLayoutMenuOption[]>();

MainLayoutMenuData.set('user-1', [
  { title: 'Dashboard', path: '/' },
  { title: 'Assets', path: '/' },
  { title: 'Users', path: '/' },
  { title: 'Programs', path: '/' },
  { title: 'Maintenance', path: '/' },
  { title: 'Roles', path: '/' },
]);

MainLayoutMenuData.set('user-2', [
  { title: 'Dashboard', path: '/dashboard' },
  { title: 'Assets', path: '/assets' },
  { title: 'Users', path: '/users' },
]);

MainLayoutMenuData.set('user-3', [
  { title: 'Dashboard', path: '/dashboard' },
  { title: 'Programs', path: '/programs' },
  { title: 'Maintenance', path: '/maintenance' },
]);

MainLayoutMenuData.set('user-4', [
  { title: 'Dashboard', path: '/dashboard' },
  { title: 'Assets', path: '/assets' },
]);

MainLayoutMenuData.set('user-5', [
  { title: 'Dashboard', path: '/dashboard' },
]);

// TODO: Get active menu option based on User Login 
const menuOption: MainLayoutMenuGroup = 'user-1';

// TODO: Write mechanism to get from navigation
// const currentPage = '/dashboard';

const styles = {
  layoutSection: 'relative w-[100vw] h-[100vh]'
}

export default MainLayout
