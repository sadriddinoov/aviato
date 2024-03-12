import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './left.scss'

export default function Left() {
    return(
        <div className="left">
            <div className="container">
                <div className="left_container">
                    <Header/>
                    <Links/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}