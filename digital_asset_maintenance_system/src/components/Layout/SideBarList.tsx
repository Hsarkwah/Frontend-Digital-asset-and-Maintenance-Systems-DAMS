import '../../assets/css/SideNavbar.css';
import { MenuOption } from '../../layouts/MainLayout';
import { LogOutItem, SideBarItem } from "./SideBarItem";


type MenuItem = {
    title: string,
    path: string
}

type ListProps = {
    ItemList: MenuItem[],
    selectedItem?: string,
    onItemClick?: (menuOption: MenuOption, index: number) => void,
    onLogoutClick?: () => void,
}


export default function SideBarList({ ItemList = [], onItemClick = () => { }, onLogoutClick, selectedItem }: Readonly<ListProps>) {
    return (
        <nav>
            <ul>
                {ItemList.map((menu: MenuItem, index: number) => (
                    <SideBarItem
                        menu={menu}
                        key={`${menu.title}-${index}`}
                        selected={selectedItem === `${index}`}
                         onClick={() => {
                            onItemClick(menu, index)
                        }} />
                ))}

                {/* log out  */}
                <LogOutItem
                    menu={{ title: "Logout", path: "" }}
                    selected={false}
                    onClick={onLogoutClick}
                />

            </ul>
        </nav>
    )
}



export { }
