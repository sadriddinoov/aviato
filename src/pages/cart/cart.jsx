import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './cart.scss'
import Cart1 from '../../assets/cart-1.jpg'
import Cart2 from '../../assets/cart-2.jpg'
import Cart3 from '../../assets/cart-3.jpg'
import { Link } from 'react-router-dom'

export default function Cart() {
    return(
        <div className="cart">
                <Header/>
                <Links/>
                <Cumb title={'Cart'} sub={'cart'} />
                <table className='cart_t'>
                    <tr className='cart_item2'>
                    <th className='cart_heading'>Item Name</th>
                    <th className='cart_heading cart_item3'>Item price</th>
                    <th className='cart_heading'>Actions</th>
                    </tr>
                    <tr className='cart_item'>
                    <td className='cart_wrap'>
                        <img src={Cart1} alt="" className="cart_img" />
                        <h3 className="cart_heading">Sunglass</h3>
                    </td>
                    <td style={{marginLeft: '100px'}}  className='cart_price'>$200.00</td>
                    <td style={{marginLeft: '90px'}}  className='cart_danger'>Remove</td>
                    </tr>
                    <tr className='cart_item'>
                    <td className='cart_wrap'>
                        <img src={Cart2} alt="" className="cart_img" />
                        <h3 className="cart_heading">Airspace</h3>
                    </td>
                    <td style={{marginLeft: '105px'}} className='cart_price'>$200.00</td>
                    <td style={{marginLeft: '90px'}} className='cart_danger'>Remove</td>
                    </tr>

                    <tr className='cart_item'>
                    <td className='cart_wrap'>
                        <img src={Cart3} alt="" className="cart_img" />
                        <h3 className="cart_heading">Bingo</h3>
                    </td>
                    <td style={{marginLeft: '130px'}} className='cart_price'>$200.00</td>
                    <td style={{marginLeft: '90px'}}     className='cart_danger'>Remove</td>
                    </tr>
                </table>

                <Link to={'/checkout'} className="cart_btn">Checkout</Link>
                <Footer/>
        </div>
    )
}