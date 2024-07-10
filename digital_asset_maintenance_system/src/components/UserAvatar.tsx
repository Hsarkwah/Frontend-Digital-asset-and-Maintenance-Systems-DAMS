import { UserCircleIcon } from '@heroicons/react/24/solid'

const UserAvatar = () => {
  return (
    <>
      <div className='user-avatar-container'>
        <UserCircleIcon className='w-[40px] h-[40px] user-icon' />
      </div>
    </>
  )
}

export default UserAvatar
