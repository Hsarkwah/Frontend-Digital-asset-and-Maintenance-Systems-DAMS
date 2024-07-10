import { BellIcon } from '@heroicons/react/24/solid'
import Notifications from './Notifications'

const NotificationIcon = () => {
  return (
    <div className='notification-icon-container'>
      <BellIcon className='w-[30px] h-[30px] notification-icon' />
      <Notifications />
    </div>
  )
}

export default NotificationIcon
