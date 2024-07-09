import '../../../assets/css/Auth.css'


const ResetPassword = () => {
  return (
    <>
      <div className='login-container'>
        <div className='login-content'>
          <h1 className='auth-title'>Reset Password</h1>
          <form className='auth-form'>
            <div className='auth-form-group'>
              <label htmlFor='password'>New Password</label>
              <input type='password' name='password' id='password' />
            </div>
            <div className='auth-form-group'>
              <label htmlFor='confirm-password'>Confirm Password</label>
              <input type='password' name='confirm-password' id='confirm-password' />
            </div>
            <button className='btn btn-submit'>Reset</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
