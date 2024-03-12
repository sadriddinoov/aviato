import './orders.scss'

export default function Orders() {
    return(
        <div className="orders">
          <table style={{marginLeft: '0px'}} className='cart_t'>
                    <tr className='cart_item2'>
                    <th className='cart_heading'>Order ID</th>
                    <th className='cart_heading cart_item3'>Date</th>
                    <th className='cart_heading'>Items</th>
                    <th className='cart_heading'>Total Price</th>
                    <th className='cart_heading'>Status</th>
                    </tr>
                    <tr className='cart_item'>
                    <td className='cart_wrap'>#252125</td>
                    <td style={{marginLeft: '150px'}}  className='cart_price'>Mar 25, 2016</td>
                    <td style={{marginLeft: '66px'}}  className='cart_price'>2</td>
                    <td style={{marginLeft: '90px'}}  className='cart_price'>$ 99.00</td>
                    <td style={{marginLeft: '90px', padding: '5px', background: '#006FEE', color: 'white', borderRadius: '5px'}}  className='cart_price'>Processing</td>
                    </tr>
                    <tr className='cart_item'>
                    <td className='cart_wrap'>#252125</td>
                    <td style={{marginLeft: '150px'}}  className='cart_price'>Mar 25, 2016</td>
                    <td style={{marginLeft: '66px'}}  className='cart_price'>3</td>
                    <td style={{marginLeft: '90px'}}  className='cart_price'>$ 150.00</td>
                    <td style={{marginLeft: '80px', padding: '5px', background: '#17c964', color: 'white', borderRadius: '5px'}}  className='cart_price'>Completed</td>
                    </tr>

                    <tr className='cart_item'>
                    <td className='cart_wrap'>#252125</td>
                    <td style={{marginLeft: '150px'}}  className='cart_price'>Mar 25, 2016</td>
                    <td style={{marginLeft: '66px'}}  className='cart_price'>3</td>
                    <td style={{marginLeft: '90px'}}  className='cart_price'>$ 150.00</td>
                    <td style={{marginLeft: '80px', padding: '5px', background: '#f31260', color: 'white', borderRadius: '5px'}}  className='cart_price'>Processing</td>
                    </tr>

                    <tr className='cart_item'>
                    <td className='cart_wrap'>#252125</td>
                    <td style={{marginLeft: '150px'}}  className='cart_price'>Mar 25, 2016</td>
                    <td style={{marginLeft: '66px'}}  className='cart_price'>3</td>
                    <td style={{marginLeft: '90px'}}  className='cart_price'>$ 150.00</td>
                    <td style={{marginLeft: '80px', padding: '5px', background: '#66aaf9', color: 'white', borderRadius: '5px'}}  className='cart_price'>On Hold</td>
                    </tr>

                    <tr className='cart_item'>
                    <td className='cart_wrap'>#252125</td>
                    <td style={{marginLeft: '150px'}}  className='cart_price'>Mar 25, 2016</td>
                    <td style={{marginLeft: '66px'}}  className='cart_price'>3</td>
                    <td style={{marginLeft: '90px'}}  className='cart_price'>$ 150.00</td>
                    <td style={{marginLeft: '80px', padding: '5px', background: '#f7b750', color: 'white', borderRadius: '5px'}}  className='cart_price'>Pending</td>
                    </tr>
                </table>
        </div>
    )
}