import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './buttons.scss'

export default function Buttons() {
    return(
        <div className="buttons">
                    <Header/>
                    <Links/>
                    <Cumb title={'Buttons'} sub={'buttons'}/>
                    <div className="button">
                        <h1 className="button_heading">
                        Button Styles
                        </h1>

                        <div className="button_wrap">
                            <a className='button_btn button_btn1'>Default button</a>
                            <a className='button_btn button_btn2'>Default button</a>
                            <a className='button_btn button_btn3'>Default button</a>
                            <a className='button_btn button_btn4'>Default button</a>
                        </div>

                        <div className="button_wrap">
                            <a className='button_btn button_btn5'>Round button</a>
                            <a className='button_btn button_btn6'>Round button</a>
                            <a className='button_btn button_btn7'>Round button</a>
                            <a className='button_btn button_btn8'>Round button</a>
                        </div>

                        <div className="button_wrap">
                            <a className='button_btn button_btn9'>Full round button</a>
                            <a className='button_btn button_btn10'>Full round button</a>
                            <a className='button_btn button_btn11'>Full round button</a>
                        </div>
                    </div>
                    <Footer/>
        </div>
    )
}