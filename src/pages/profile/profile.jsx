import './profile.scss'
import avatar from '../../assets/avater.jpg'
import { Link } from 'react-router-dom'

export default function Profile() {
    return(
        <div className="profile">
            <div>
                <img className='profile_img' src={avatar} alt="" />
                <Link className='profile_link' to={'/interface/profile'}>Change Image</Link>
            </div>

            <div>
                <div className="profile_wrap">
                    <h2 className="profile_heading">
                    Full Name:
                    </h2>

                    <p className="profile_text">
                    Johanna Doe
                    </p>
                </div>

                <div className="profile_wrap">
                    <h2 className="profile_heading">
                    Country:
                    </h2>

                    <p className="profile_text">
                    USA
                    </p>
                </div>

                <div className="profile_wrap">
                    <h2 className="profile_heading">
                    Email:
                    </h2>

                    <p className="profile_text">
                    mail@gmail.com
                    </p>
                </div>

                <div className="profile_wrap">
                    <h2 className="profile_heading">
                    Phone:
                    </h2>

                    <p className="profile_text">
                    +880123123
                    </p>
                </div>

                <div className="profile_wrap">
                    <h2 className="profile_heading">
                    Date of Birth:
                    </h2>

                    <p className="profile_text">
                    Dec , 22 ,1991  
                    </p>
                </div>
            </div>
        </div>
    )
}