import { Link } from "react-router-dom";
import { ArrowRightEndOnRectangleIcon, BuildingOfficeIcon, ChartBarIcon, ClipboardDocumentListIcon, ComputerDesktopIcon, UsersIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid"


type MenuItem = {
    title: string,
    path: string
}

type SideBarItemProps = {
    menu: MenuItem,
    selected: boolean,
    onClick?: () => void
}


function SideBarItem({ menu, selected, onClick }: Readonly<SideBarItemProps>) {
    const Icon = IconComponent[menu.title as IconKeys]
    return (
        <li >
            <Link
                style={styles.sideBarButton}
                className={selected ? styles.sideBarItemActive : styles.sideBarItem}
                to={menu.path}
                onClick={() => { if (onClick !== undefined) { onClick() } }}>
                {Icon}
                <span className={styles.sideBarTitle}>{menu.title}</span>
            </Link>
        </li>
    )
}


function LogOutItem({ menu = { title: 'Logout', path: '' }, selected = false, onClick }: Readonly<SideBarItemProps>) {
    const Icon = menu ? IconComponent[menu.title as IconKeys] : IconComponent['Logout']

    return (
        <li >
            <Link
                style={styles.sideBarButton}
                className={selected ? styles.sideBarItemActive : styles.sideBarItemLogout}
                to={menu.path}
                onClick={() => { if (onClick !== undefined) { onClick() } }}>
                {Icon}
                <span className={styles.sideBarTitle}>{menu.title}</span>
            </Link>
        </li>
    )
}


const styles = {
    sideBarItemActive: 'nav-list-item active',
    sideBarItem: 'nav-list-item item',
    navItem: 'nav-item',
    sideBarItemLogout: 'nav-list-item logout',
    icon: 'nav-icon',
    sideBarTitle: 'nav-list-item-description',

    sideBarButton: {
        // border: '1px solid yellow',
        width: '100%'
    }
}

type IconKeys =
    | 'Dashboard'
    | 'Assets'
    | 'Users'
    | 'Programs'
    | 'Maintenance'
    | 'Roles'
    | 'Logout'
    | '';

type IconComponentType = {
    [key in IconKeys]: JSX.Element;
};

const IconComponent: IconComponentType = {
    'Dashboard': <ChartBarIcon className={styles.icon} />,
    'Assets': <ComputerDesktopIcon className={styles.icon} />,
    'Users': <UsersIcon className={styles.icon} />,
    'Programs': <BuildingOfficeIcon className={styles.icon} />,
    'Maintenance': <WrenchScrewdriverIcon className={styles.icon} />,
    'Roles': <ClipboardDocumentListIcon className={styles.icon} />,
    'Logout': <ArrowRightEndOnRectangleIcon className={styles.icon} />,
    '': <></>
}

export { SideBarItem, LogOutItem }
