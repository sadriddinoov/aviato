import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import ShopComp from '../../components/shop/shop'
import './shop.scss'

export default function Shop() {
    return(
        <>
         <Header/>
        <Links/>
        <Cumb title={'Shop'} sub={'shop'}/>
        <ShopComp/>
        <Footer/>
        </>
    )
}