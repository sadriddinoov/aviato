import './soon.scss'
import bgcImg from '../..//assets/coming-soon-bg.jpg';
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.jpg'
import pinterest from '../../assets/pinterest.png'
import { useTranslation } from 'react-i18next';

export default function Soon() {
    const {t} = useTranslation()
    return(
        <div style={{backgroundImage: `url(${bgcImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="soon">
            <div className="container">
                <div className="soon_container">
                    <p className="soon_text">The countdown is finished!</p>
                    <h2 className="soon_heading">
                    Hello, we're Aviato and we are almost ready for launch
                    </h2>
                    
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

                    <h2 style={{color: 'white', marginTop: '30px'}} className="footer_heading">
                        {t('subscribe.copyright')}
                        <a target='_blank' href='https://themefisher.com/' className="footer_text">
                            {t('subscribe.themefisher')}
                        </a>
                    </h2>
                </div>
            </div>
        </div>
    )
}