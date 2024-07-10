import {
  UserCircleIcon,
  EnvelopeOpenIcon,
  EnvelopeIcon
} from '@heroicons/react/24/solid'
import { Colors } from '../assets/colors'

const Notifications = () => {
  return (
    <section className='notifications'>
      <h3>Notifications</h3>
      <div>
        {/* Display this when there no notifications */}
        <div className='notification no-notification'>
          <p>There are no new notifications</p>
        </div>

        {/* Display this when there are notifications */}
        <div className='notification'>
          <div>
            <UserCircleIcon
              className='w-[50px] h-[50px] notification-icon'
              style={{ color: Colors.Disable }}
            />
          </div>
          <div className='notification-content'>
            <div className='notification-title mb-2'>
              <p>From: Calvin Mensah (Regional IT Manager)</p>
              <div className='flex justify-between items-center'>
                <h5>Maintenance</h5>
                {/* Display this when notification is yet to be read */}
                <EnvelopeOpenIcon
                  className='w-[30px] h-[30px] env-open'
                  style={{ color: Colors.FadedGreen }}
                />
                {/* Display this when notification has already been read */}
                <EnvelopeIcon
                  className='w-[30px] h-[30px] env-close'
                  style={{ color: Colors.FadedGreen }}
                />
              </div>
            </div>
            <div className='notification-body flex flex-col'>
              <p className='mb-1'>
                Your device is due for maintenance on Tue, 17 June 2020.
              </p>
              {/* Display this button when the notification requires an action */}
              <button className='btn btn-submit w-[100px] mb-0 self-end'>
                Confirm
              </button>
            </div>

            <div className='notification-time-date'>
              <p className='flex justify-between items-center text-sm'>
                <span>11:07am</span>
                <span>24/07/2020</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notifications
