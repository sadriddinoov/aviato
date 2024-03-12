import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './full.scss'

export default function Full() {
    return(
        <div className="full">
            <div className="container">
                <div className="full_container">
                    <Header/>
                    <Links/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}