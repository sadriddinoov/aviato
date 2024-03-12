import { Link } from 'react-router-dom'
import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './chekout.scss'
import cart1 from '../../assets/cart-1.jpg'
import visa from '../../assets/visa.png'

export default function Checkout() {
    return(
        <div className="checkout">
                    <Header/>
                    <Links/>
                    <Cumb title={'Checkout'} sub={'checkout'}/>
                    <div className="check">
                        <div className="check_left">
                           <div className="check_l-top">
                           <h1 className="check_l-heading">
                                BILLING DETAILS
                            </h1>

                            <input className='check_input' required placeholder='FULL NAME' type="text" />
                            <input className='check_input' required placeholder='ADDRESS' type="text" />
                            <div className="check_l-wrapper">
                            <input className='check_input2' required placeholder='ZIP CODE' type="text" />
                            <input className='check_input3' required placeholder='CITY' type="text" />
                            </div>
                            <input className='check_input' required placeholder='COUNTRY' type="text" />
                           </div>

                           <div className="check_l-top">
                           <h1 className="check_l-heading">
                                PAYMENT METHOD
                            </h1>

                            <input className='check_input' required placeholder='CARD NUMBER * .... .... .... ....' type="text" />
                            <input className='check_input' required placeholder='EXPIRY (MM/YY) * MM / YY' type="text" />
                            <input className='check_input' required placeholder='CARD CODE *  CVC' type="text" />
                           </div>

                           <Link className='check_link' to={'/confirmation'}>PLACE OLDER</Link>
                        
                        </div>

                        <div className="check_right">
                            <h1 className="check_l-heading">
                                ORDER SUMMARY
                            </h1>

                            <div className="check_r-wrap">
                                <img src={cart1} className='check_img' alt="" />

                                <div>
                                    <h2 className="check_r-heading">
                                        Ambassador Heritage 1921
                                    </h2>

                                    <p className="check_price">
                                        1 x $249
                                    </p>

                                    <p className="check_text">
                                        Remove
                                    </p>
                                </div>
                            </div>

                            <div style={{display: 'flex', gap: '5px', marginBottom: '10px'}}>
                            <p className='check_discout'>
                            Have a discount ?
                            </p>
                            <p className="check_it">
                                enter it here
                            
                            </p>
                            </div>

                            <div className="check_w">
                                <p className="check_w-text">
                                    Subtotal:
                                </p>

                                <p className="check_price">
                                    $190
                                </p>
                            </div>

                            <div className="check_w2">
                                <p className="check_w-text">
                                    Shipping:
                                </p>

                                <p className="check_price">
                                    Free
                                </p>
                            </div>

                            <div className="check_wp">
                                <h2 className="check_wp-heading">
                                    Total
                                </h2>

                                <p className="check_wp-text">
                                    $250
                                </p>
                            </div>

                            <img src={visa} alt="" className="check_r-img" />
                        </div>
                    </div>
                    <Footer/>
        </div>
    )
}