import '../../../assets/css/Auth.css';
import AuthForm from '../../../components/Authentication/Form';

const ForgotPassword = () => {

  function forgotButton() {
    console.log('forgot password clicked')
  }

  return (
    <div className='auth-container'>
      <div className='auth-content'>

        <AuthForm
          type='forgot-password'
          title='Forgot Password'
          actionText='Next' />

      </div>
    </div>
  )
}

export default ForgotPassword
