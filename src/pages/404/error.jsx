import { Link } from 'react-router-dom'
import './error.scss'

export default function Error() {
    return(
        <div className="error">
            <div className="container">
                <div className="error_container">
                    <h2 className="error_heading">AVIATO</h2>
                    <h1 className="error_error">404</h1>
                    <h2 className="error_page">PAGE  NOT  FOUND</h2>
                    <Link className='error_link' to={'/'}>&lt;- GO HOME</Link>
                </div>
            </div>
        </div>
    )
}