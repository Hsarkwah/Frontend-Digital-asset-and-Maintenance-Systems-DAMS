import NotificationIcon from './NotificationIcon'
import UserAvatar from './UserAvatar'
import '../assets/css/Header.css'

const Header = ({ logo, title }: { logo: string; title: string }) => {
  return (
    <header className='flex items-center'>
      <div className='container'>
        <div className='title'>
          <figure className='header-logo'>
            <img src={logo} alt='Ghana Health Service logo' />
          </figure>
          <h1>{title}</h1>
        </div>
        <div className='notification-user'>
          <NotificationIcon />
          <UserAvatar />
        </div>
      </div>
    </header>
  )
}

export default Header
