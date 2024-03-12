import { Link } from 'react-router-dom'
import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './pricing.scss'

export default function Pricing() {
    return(
        <div className="">
                    <Header/>
                    <Links/>
                    <Cumb title={'Pricing Tabele'} sub={'pricing'}/>
                    <ul className="pricing">
                        <li className="pricing_item">
                            <h2 className="pricing_type">
                                BASIC
                            </h2>

                            <h1 className="pricing_price">
                                $99
                            </h1>

                            <p className="pricing_text">
                            Perfect for single freelancers who work by themselves
                            </p>

                            <p className="pricing_text">
                            1GB Disk Space <br /> <br />  
                            10 Email Account <br /> <br /> 
                            Script Installer <br /> <br /> 
                            1 GB Storage <br /> <br /> 
                            10 GB Bandwidth <br /> <br /> 
                            24/7 Tech Support 
                            </p>

                            <Link className='pricing_link' to={'/signin'}>Sign up</Link>
                        </li>

                        <li className="pricing_item">
                            <h2 className="pricing_type">
                                BASIC
                            </h2>

                            <h1 className="pricing_price">
                                $99
                            </h1>

                            <p className="pricing_text">
                            Suitable for small businesses with up to 5 employees
                            </p>

                            <p className="pricing_text">
                            1GB Disk Space <br /> <br />  
                            10 Email Account <br /> <br /> 
                            Script Installer <br /> <br /> 
                            1 GB Storage <br /> <br /> 
                            10 GB Bandwidth <br /> <br /> 
                            24/7 Tech Support 
                            </p>

                            <Link className='pricing_link' to={'/signin'}>Sign up</Link>
                        </li>

                        <li className="pricing_item">
                            <h2 className="pricing_type">
                                BASIC
                            </h2>

                            <h1 className="pricing_price">
                                $99
                            </h1>

                            <p className="pricing_text">
                            Great for large businesses with more than 5 employees
                            </p>

                            <p className="pricing_text">
                            1GB Disk Space <br /> <br /> 
                            10 Email Account <br /> <br /> 
                            Script Installer <br /> <br /> 
                            1 GB Storage <br /> <br /> 
                            10 GB Bandwidth <br /> <br /> 
                            24/7 Tech Support 
                            </p>

                            <Link className='pricing_link' to={'/signin'}>Sign up</Link>
                        </li>
                    </ul>
                    <Footer/>
        </div>
    )
}