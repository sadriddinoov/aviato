import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './columns.scss'

export default function Columns() {
    return(
        <div className="columns">
            <div className="container">
                <div className="columns_container">
                    <Header/>
                    <Links/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}