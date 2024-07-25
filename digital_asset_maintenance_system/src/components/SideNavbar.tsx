import '../assets/css/SideNavbar.css'
import { Link } from 'react-router-dom'
import {
  ArrowRightEndOnRectangleIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/solid'

const SideNavbar = () => {
  return (
    <nav>
      <ul>
        <li className='nav-list-item active'>
          <Link to=''>
            <ChartBarIcon className='nav-icon' />
          </Link>
          <span className='nav-list-item-description'>Dashboard</span>
        </li>
        <li className='nav-list-item'>
          <Link to=''>
            <ComputerDesktopIcon className='nav-icon' />
          </Link>
          <span className='nav-list-item-description'>Assets</span>
        </li>
        <li className='nav-list-item'>
          <Link to=''>
            <UsersIcon className='nav-icon' />
          </Link>
          <span className='nav-list-item-description'>Users</span>
        </li>
        <li className='nav-list-item'>
          <Link to=''>
            <BuildingOfficeIcon className='nav-icon' />
          </Link>
          <span className='nav-list-item-description'>Programs</span>
        </li>

        <li className='nav-list-item'>
          <Link to=''>
            <WrenchScrewdriverIcon className='nav-icon' />
          </Link>
          <span className='nav-list-item-description'>Maintenance</span>
        </li>
        <li className='nav-list-item'>
          <Link to=''>
            <ClipboardDocumentListIcon className='nav-icon' />
          </Link>
          <span className='nav-list-item-description'>
            Roles and Permissions
          </span>
        </li>

        <li className='nav-list-item logout'>
          <Link to=''>
            <ArrowRightEndOnRectangleIcon className='nav-icon' />
          </Link>
          <span className='nav-list-item-description'>Logout</span>
        </li>

      </ul>
    </nav>
  )
}

export default SideNavbar
