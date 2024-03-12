import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './confirmation.scss'
import confirmation from '../../assets/confirmation.png'
import { Link } from 'react-router-dom'

export default function Confirmation() {
    return (
        <>
        <Header/>
        <Links/>
        <section className="confirmation">
            <div className="container">
                <div className="confirmation_container">
                    <img src={confirmation} className="confirmation_img" alt="" />
                    <h2 className="confirmation_heading">
                    Thank you! For your payment
                    </h2>
                    <p className="confirmation_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sed.
                    </p>
                    <Link className='confirmation_link' to={'/shop'}>CONTINUE SHOPPING</Link>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
