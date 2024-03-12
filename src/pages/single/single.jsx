import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './single.scss'

export default function Single() {
    return(
        <div className="single">
            <div className="container">
                <div className="single_container">
                    <Header/>
                    <Links/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}