import { Colors } from '../../../assets/colors'
import { Link } from 'react-router-dom'
import '../../../assets/css/Auth.css'
import AuthForm from '../../../components/Authentication/Form'


const Login = () => {

  function loginButton() {
    console.log('login clicked')
  }

  return (
    <div className='auth-container'>
      <div className='auth-content'>

        <AuthForm
          type='login'
          title='Login'
          actionText='Login'
          onButtonClick={loginButton}
           />

        <Link
          to='/auth/forgot-password'
          className='text-center'
          style={{ color: Colors.Green }}
        >
          Forgot your password?
        </Link>
      </div>
    </div>
  )
}

export default Login
