import { Outlet } from 'react-router-dom'

const AuthLayout = ({authImage, logo, title}: {authImage: string, logo: string, title: string}) => {
  return (
    <>
      <section className='flex'>
        {/* Authentication layout image section */}
        <div className='auth-image-section basis-2/3 relative'>
          <figure>
            <img src={authImage}
              alt='A man reparing computer chips.' />
          </figure>
        </div>

        {/* Authentication layout content section */}
        <div className='basis-1/3 py-[3rem] flex justify-center'>
          <div className='auth-content'>
            <div className='auth-content-header flex justify-center items-center flex-col mb-3'>
              <div className='w-[70px] h-[100px] mb-1'>
                <figure>
                  <img src={logo} alt='Ghana Health Service Logo' />
                </figure>
              </div>
              <h1
                className='text-[1rem] font-[500] mb-6'
              >
                {title}
              </h1>
            </div>
            <div className='auth-content-body'>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AuthLayout
