import './dashboard.scss'
import avatar from '../../assets/avater.jpg'

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard_top">
                <img src={avatar} alt="" className="dashboard_img" />

               <div>
               <h2 className="dashboard_heading">
                Welcome Adam Smith
                </h2>

                <p className="dashboard_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, iure, est. Sit mollitia est maxime! Eos cupiditate tempore, tempora omnis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil.
                </p>
               </div>
            </div>

            <h2 className="dashboard_heading">
                Total Orders
            </h2>
            <table style={{marginLeft: '0px'}} className='cart_t'>
                    <tr className='cart_item2'>
                    <th className='cart_heading'>Order ID</th>
                    <th className='cart_heading cart_item3'>Date</th>
                    <th className='cart_heading'>Items</th>
                    <th className='cart_heading'>Total Price</th>
                    </tr>
                    <tr className='cart_item'>
                    <td className='cart_wrap'>#252125</td>
                    <td style={{marginLeft: '150px'}}  className='cart_price'>Mar 25, 2016</td>
                    <td style={{marginLeft: '66px'}}  className='cart_price'>2</td>
                    <td style={{marginLeft: '90px'}}  className='cart_price'>$ 99.00</td>
                    </tr>
                    <tr className='cart_item'>
                    <td className='cart_wrap'>#252125</td>
                    <td style={{marginLeft: '150px'}}  className='cart_price'>Mar 25, 2016</td>
                    <td style={{marginLeft: '66px'}}  className='cart_price'>2</td>
                    <td style={{marginLeft: '90px'}}  className='cart_price'>$ 99.00</td>
                    </tr>

                    <tr className='cart_item'>
                    <td className='cart_wrap'>#252125</td>
                    <td style={{marginLeft: '150px'}}  className='cart_price'>Mar 25, 2016</td>
                    <td style={{marginLeft: '66px'}}  className='cart_price'>2</td>
                    <td style={{marginLeft: '90px'}}  className='cart_price'>$ 99.00</td>
                    </tr>
                </table>
        </div>
    )
}