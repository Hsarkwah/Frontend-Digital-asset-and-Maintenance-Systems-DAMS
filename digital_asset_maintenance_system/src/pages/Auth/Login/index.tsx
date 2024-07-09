import { Colors } from '../../../assets/colors'
import { Link } from 'react-router-dom'
import '../../../assets/css/Auth.css'


const Login = () => {
  return (
    <>
      <div className='auth-container'>
        <div className='auth-content'>
          <h1 className='auth-title'>Login</h1>
          <form className='auth-form'>
            <div className='auth-form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <div className='auth-form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' />
            </div>
            <button className='btn btn-submit'>Login</button>
          </form>
          <Link
            to='/auth/forgot-password'
            className='text-center'
            style={{ color: Colors.Green }}
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login
