import { Link } from 'react-router-dom'
import './login.scss'

export default function Login() {
    return(
        <div className="login">
            <div className="container">
                <div className="login_container">
                    <Link className='login_link' to={'/'}>AVIATO</Link>
                    <h2 className="login_heading">
                        WELCOME BACK
                    </h2>

                    <form>
                        <input placeholder='Email' required type="email" className="login_input" />
                        <input placeholder='Password' required type="password" className="login_input" />
                        <Link to={'/'} type='submit' className="login_btn">LOGIN</Link>
                    </form>

                    <div className="login_wrap">
                        <p className="login_text">
                        New in this site ?
                        </p>

                        <Link className='login_l' to={'/signin'}>Create New Account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}