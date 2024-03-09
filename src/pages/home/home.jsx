import { useTranslation } from 'react-i18next'
import './home.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

export default function Home() {
    const t = useTranslation()

    return (
        <>
            <Header/>
            <Footer/>
        </>
    )
}