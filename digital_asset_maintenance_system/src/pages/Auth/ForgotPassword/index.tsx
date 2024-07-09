import '../../../assets/css/Auth.css';

const ForgotPassword = () => {
  return (
    <>
      <div className='auth-container'>
        <div className='auth-content'>
          <h1 className='auth-title'>Forgot Password</h1>
          <form className='auth-form'>
            <div className='auth-form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <button className='btn btn-submit'>Next</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
