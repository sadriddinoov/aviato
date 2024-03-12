import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './right.scss'

export default function Right() {
    return(
        <div className="right">
            <div className="container">
                <div className="right_container">
                    <Header/>
                    <Links/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}