import { Link, Outlet } from 'react-router-dom'
import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './interface.scss'

export default function Interface() {
    return(
        <div className="">
                    <Header/>
                    <Links/>
                    <Cumb title={'Dashboard'} sub={'my account'}/>
                    <div className="interface">
                        <div className="container">
                            <div className="interface_container">
                                <div className="interface_wrap">
                                    <Link className='interface_link' to={'/interface/dashboard'}>Dashboard</Link>
                                    <Link className='interface_link' to={'/interface/orders'}>Orders</Link>
                                    <Link className='interface_link' to={'/interface/address'}>Address</Link>
                                    <Link className='interface_link' to={'/interface/profile'}>Profile Details</Link>
                                </div>

                                <div style={{marginTop: '35px'}} className="interface_render">
                                    <Outlet/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
        </div>
    )
}