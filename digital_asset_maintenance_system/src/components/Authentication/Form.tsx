interface FormProps {
    type: 'reset' | 'login' | 'forgot-password' | string,
    title: string,
    actionText: string,
    onButtonClick?: () => void,
    // onChangeText?: () => void,
}

function AuthForm({
    type,
    actionText = 'Action Text',
    title = 'Form Title',
    onButtonClick
}: FormProps): JSX.Element {
    const passwordText = type === 'reset' ? 'New Password' : 'Password';
    
    return (
        <form className='auth-form'>
            <h1 className='auth-title'>{title}</h1>

            {(type === 'login' || type === 'forgot-password') && (
                <div className='auth-form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' />
                </div>
            )}

            {(type === 'login' || type === 'reset') && (
                <div className='auth-form-group'>
                    <label htmlFor='password'>{passwordText}</label>
                    <input type='password' name='password' id='password' />
                </div>
            )}

            {type === 'reset' && (
                <div className='auth-form-group'>
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input type='password' name='confirm-password' id='confirm-password' />
                </div>
            )}

            <button className='btn btn-submit' onClick={() => {
                if (onButtonClick !== undefined) {
                    onButtonClick();
                }
            }}>
                {actionText}
            </button>
        </form>
    )
}

export default AuthForm;
