import { useTranslation } from 'react-i18next'
import './footer.scss'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import pinterest from '../../assets/pinterest.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    const {t} = useTranslation()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_container">
                    <div className="footer_top">
                        <a href="https://www.facebook.com/themefisher" target='_blank' className='footer_link'>
                            <img src={facebook} className='footer_img' alt="" />
                        </a>

                        <a href="https://www.instagram.com/themefisher" target='_blank' className='footer_link'>
                            <img src={instagram} className='footer_img' alt="" />
                        </a>

                        <a href="https://twitter.com/themefisher" target='_blank' className='footer_link'>
                            <img src={twitter} className='footer_img' alt="" />
                        </a>

                        <a href="https://www.pinterest.com/themefisher/" target='_blank' className='footer_link'>
                            <img src={pinterest} className='footer_img' alt="" />
                        </a>
                    </div>

                    <ul className="footer_list">
                        <Link to={'/contact'} className="footer_item">{t('link.contact')}</Link>
                        <Link to={'/shop'} className="footer_item">{t('link.shop')}</Link>
                        <Link to={'/pricing'} className="footer_item">{t('link.pricing')}</Link>  
                        <Link to={'/contact'} className="footer_item">{t('subscribe.pp')}</Link>
                    </ul>

                    <h2 className="footer_heading">
                        {t('subscribe.copyright')}
                        <a target='_blank' href='https://themefisher.com/' className="footer_text">
                            {t('subscribe.themefisher')}
                        </a>
                    </h2>
                </div>
            </div>
        </footer>
    )
}