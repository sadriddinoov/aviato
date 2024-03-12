import { Link } from 'react-router-dom'
import './forget.scss'

export default function Forget() {
    return(
        <div className="login">
        <div className="container">
            <div className="login_container">
                <Link className='login_link' to={'/'}>AVIATO</Link>
                <h2 className="login_heading">
                    WELCOME BACK
                </h2>

                <p style={{textAlign: 'left', marginBottom: '20px'}} className="login_text">
                Please enter the email address for your account. A verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account.
                </p>

                <form>
                    <input placeholder='Account Email Address' required type="email" className="login_input" />
                    <Link to={'/forget'} type='submit' className="login_btn">REQUEST PASSWORD RESET</Link>
                </form>

                    <Link className='login_l' to={'/login'}>Back to log in</Link>
            </div>
        </div>
    </div>
    )
}