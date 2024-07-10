import '../../../assets/css/Auth.css'
import AuthForm from '../../../components/Authentication/Form'


const ResetPassword = () => {

  function resetButton() {
    console.log('Reset Password clicked')
  }

  return (
    <div className='login-container'>
      <div className='login-content'>
        <AuthForm
          type='reset'
          title='Reset Password'
          actionText='Reset'
          onButtonClick={resetButton} />

      </div>
    </div>
  )
}

export default ResetPassword
