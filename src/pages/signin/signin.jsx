import { Link } from 'react-router-dom'
import './signin.scss'

export default function Signin() {
    return(
        <div className="login">
        <div className="container">
            <div className="login_container">
                <Link className='login_link' to={'/'}>AVIATO</Link>
                <h2 className="login_heading">
                    CREATE YOUR ACCOUNT
                </h2>

                <form>
                    <input placeholder='First Name'  type="text" className="login_input" />
                    <input placeholder='Last Name' type="text" className="login_input" />
                    <input placeholder='Username'  type="text" className="login_input" />
                    <input placeholder='Email'  type="email" className="login_input" />
                    <input placeholder='Password'  type="password" className="login_input" />
                    <Link to={'/'} type='submit' className="login_btn">SIGN IN</Link>
                </form>

                <div className="login_wrap">
                    <p className="login_text">
                    Already hava an account ?
                    </p>

                    <Link className='login_l' to={'/login'}>Login</Link>
                </div>

                <Link className='login_l' to={'/forget'}>Forgot your password?</Link>
            </div>
        </div>
    </div>
    )
}