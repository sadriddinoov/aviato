import './address.scss'

export default function Address() {
    return(
        <div className="address">
            <table style={{marginLeft: '0px'}} className='cart_t'>
                    <tr className='cart_item2'>
                    <th className='cart_heading'>Company</th>
                    <th style={{marginRight: '100px', marginLeft: '-100px'}} className='cart_heading'>Name</th>
                    <th style={{marginRight: '155px'}} className='cart_heading'>Address</th>
                    <th style={{marginRight: '50px'}} className='cart_heading'>Country</th>
                    <th className='cart_heading'>Phone</th>
                    </tr>
                    <tr className='cart_item'>
                    <td className='cart_wrap'>Nokia</td>
                    <td style={{marginLeft: '-10px'}}  className='cart_price'>Adam Smith</td>
                    <td style={{marginLeft: '66px'}}  className='cart_price'>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                    <td style={{marginLeft: '85px'}}  className='cart_price'>Bangladesh</td>
                    <td style={{marginLeft: '90px'}}  className='cart_price'>+884 5452 6452</td>
                    </tr>
                    <tr className='cart_item'>
                    <td className='cart_wrap'>Samsung</td>
                    <td style={{marginLeft: '-40px'}}  className='cart_price'>Adam Smith</td>
                    <td style={{marginLeft: '70px'}}  className='cart_price'>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                    <td style={{marginLeft: '85px'}}  className='cart_price'>Bangladesh</td>
                    <td style={{marginLeft: '90px'}}  className='cart_price'>+884 5452 6452</td>
                    </tr>

                    <tr className='cart_item'>
                    <td className='cart_wrap'>Motorola</td>
                    <td style={{marginLeft: '-30px'}}  className='cart_price'>Adam Smith</td>
                    <td style={{marginLeft: '62px'}}  className='cart_price'>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                    <td style={{marginLeft: '85px'}}  className='cart_price'>Bangladesh</td>
                    <td style={{marginLeft: '90px'}}  className='cart_price'>+884 5452 6452</td>
                    </tr>
                </table>
        </div>
    )
}