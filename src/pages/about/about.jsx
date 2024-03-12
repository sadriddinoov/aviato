import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './about.scss'
import about from '../../assets/about.jpg'
import award from '../../assets/awards-logo.png'
import bg1 from '../../assets/bg-1.jpg'
import team1 from '../../assets/team-1.jpg'
import team2 from '../../assets/team-2.jpg'
import team3 from '../../assets/team-3.jpg'
import { Link } from 'react-router-dom'

export default function About() {
    return(
        <div className="">
                    <Header/>
                    <Links/>
                    <Cumb title={'About Us'} sub={'about us'}/>
                    <div className="about">
                        <div className="container">
                            <div className="about_container">
                                <div className="about_top">
                                    <img src={about} alt="" className="about_img" />

                                    <div>
                                        <h1 className="about_heading">
                                        About Our Shop
                                        </h1>

                                        <p className="about_text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius enim, accusantium repellat ex autem numquam iure officiis facere vitae itaque. <br /> <br />

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam qui vel cupiditate exercitationem, ea fuga est velit nulla culpa modi quis iste tempora non, suscipit repellendus labore voluptatem dicta amet? <br /> <br />

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam qui vel cupiditate exercitationem, ea fuga est velit nulla culpa modi quis iste tempora non, suscipit repellendus labore voluptatem dicta amet?
                                        </p>

                                        <Link to={'/contact'} className='about_link'>DOWNLOAD COMPANY PROFILE</Link>
                                    </div>
                                </div>

                                <div className="about_wrap">
                                    <img src={award} className='about_award' alt="" />
                                    <img src={award} className='about_award' alt="" />
                                    <img src={award} className='about_award' alt="" />
                                    <img src={award} className='about_award' alt="" />
                                </div>

                                <div className="about_bottom">
                                    <h2 className="about_b-heading">
                                    TEAM MEMBERS
                                    </h2>

                                    <ul className="about_list">
                                        <li className="about_item">
                                            <img src={team1} alt="" className="about_item-img" />
                                            <h2 className="about_item-heading">Jonathon Andrew</h2>
                                            <p className="about_text">
                                                Founder
                                            </p>
                                        </li>

                                        <li className="about_item">
                                            <img src={team2} alt="" className="about_item-img" />
                                            <h2 className="about_item-heading">Adipisci Velit</h2>
                                            <p className="about_text">
                                            Developer
                                            </p>
                                        </li>

                                        <li className="about_item">
                                            <img src={team1} alt="" className="about_item-img" />
                                            <h2 className="about_item-heading">John Fexit</h2>
                                            <p className="about_text">
                                            Shop Manager
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section style={{backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="bg">
                        <h1 className="bg_heading">
                            Video Presentation
                        </h1>

                        <a href="https://www.youtube.com/watch?v=oyEuk8j8imI" target='_blank' className="bg_link">There</a>
                    </section>
                    <Footer/>
        </div>
    )
}