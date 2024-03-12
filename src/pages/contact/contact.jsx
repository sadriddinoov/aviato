import { Link } from 'react-router-dom'
import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './contact.scss'
import house from '../../assets/home.png'
import email from '../../assets/email.webp'
import earth from '../../assets/earth.png'
import phone from '../../assets/phone.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.jpg'
import pinterest from '../../assets/pinterest.png'

export default function Contact() {
    return(
        <div className="">
                    <Header/>
                    <Links/>
                    <Cumb title={'Contact Us'} sub={'contact'}/>
                    <div className="contact">
                        <div className="container">
                            <div className="contact_container">
                                <div className="contact_left">
                                    <input placeholder='Your Name' type="text" className="contact_input" />
                                    <input placeholder='Your Email' type="email" className="contact_input" />
                                    <input placeholder='Subject' type="text" className="contact_input" />
                                    <input placeholder='Message' type="text" className="contact_input contact_input2" />
                                    <Link className='contact_submit' to={'/404'}>SUBMIT</Link>
                                </div>

                                <div className="contact_right">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29229.97824086401!2d90.33573163476561!3d23.684994000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2z0JHQsNC90LPQu9Cw0LTQtdGI!5e0!3m2!1sru!2s!4v1710204345475!5m2!1sru!2s" width="555" height="300" className='contact_map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    <div className="contact_wrap">
                                        <img src={house} alt="" className="contact_img" />
                                        <p className="contact_text">
                                        Khaja Road, Bayzid, Chittagong, Bangladesh
                                        </p>
                                    </div>

                                    <div className="contact_wrap">
                                        <img src={phone} alt="" className="contact_img" />
                                        <p className="contact_text">
                                        Phone: +880-31-000-000
                                        </p>
                                    </div>

                                    <div className="contact_wrap">
                                        <img src={earth} alt="" className="contact_img" />
                                        <p className="contact_text">
                                        Fax: +880-31-000-000
                                        </p>
                                    </div>

                                    <div className="contact_wrap">
                                        <img src={email} alt="" className="contact_img" />
                                        <p className="contact_text">
                                        Email: hello@example.com
                                        </p>
                                    </div>

                                    <div className="contact_wrap">
                                        <a href="https://www.facebook.com/themefisher" target='_blank' className="contact_link">
                                            <img src={facebook} alt="" className='contact_tg'/>
                                        </a>
                                        <a href="https://twitter.com/themefisher" target='_blank' className="contact_link">
                                            <img src={twitter} alt="" className='contact_tg'/>
                                        </a>
                                        <a href="https://www.instagram.com/themefisher" target='_blank' className="contact_link">
                                            <img src={instagram} alt="" className='contact_tg'/>
                                        </a>
                                        <a href="https://www.pinterest.com/themefisher/" target='_blank' className="contact_link">
                                            <img src={pinterest} alt="" className='contact_tg'/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
        </div>
    )
}