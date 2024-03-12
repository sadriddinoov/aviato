import './header.scss'
import call from '../../assets/call.png'
import search from '../../assets/search.webp'
import cart from '../../assets/cart.jpg'
import cart1 from '../../assets/cart-1.jpg'
import cart2 from '../../assets/cart-2.jpg'
import { useTranslation } from 'react-i18next'
import { Tooltip } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export default function Header() {
    const {t, i18n} = useTranslation()

    const handleClcikLang = (e) => {
        i18n.changeLanguage(e.target.value);
    
        localStorage.setItem("lang", JSON.stringify(e.target.value));
      };

    const handleSubmit = (e) => {
       e.preventDefault();
       window.location = `https://demo.themefisher.com/aviato-bootstrap/post?`
    };
    

    return (
        <header className='header'>
            <div className="container">
                <div className="header_container">
                    <a  href="tel:+012912323123123" className="header_call">
                        <img style={{width: '17px', height: '15px'}} src={call} alt="" />
                        0129-12323-123123     
                    </a>

                    <a href="/" className="header_link">
                        AVIATO
                    </a>

                    <ul className="header_bar">
                        <li className='header_item'>
                            <Tooltip
                                key={1}
                                placement={'bottom'}
                                content={(
                                    <ul className='header_tool'>
                                        <li className="header_t-item">
                                            <img className='header_t-img' src={cart1} alt="" />
                                            <div className="header_wrapper">
                                                <h2 className="header_t-heading">
                                                    {t('header.bag')}
                                                </h2>

                                                <p className="header_t-text">
                                                    1 x 1250.00
                                                </p>

                                                <p className="header_t-text2">
                                                    $1200
                                                </p>
                                            </div>
                                            <h1 className="header_code">
                                                x
                                            </h1>
                                        </li>

                                        <li className="header_t-item">
                                            <img className='header_t-img' src={cart2} alt="" />
                                            <div className="header_wrapper">
                                                <h2 className="header_t-heading">
                                                    {t('header.bag')}
                                                </h2>

                                                <p className="header_t-text">
                                                    1 x 1250.00
                                                </p>

                                                <p className="header_t-text2">
                                                    $1200
                                                </p>
                                            </div>

                                            <h1 className="header_code">
                                                x
                                            </h1>
                                        </li>

                                        <div className="header_bottom">
                                            <div className="header_b-wrapper">
                                                <h2 className="header_b-heading">
                                                    {t('header.total')}
                                                </h2>

                                                <h2 className="header_b-heading">
                                                    $2400
                                                </h2>
                                            </div>

                                            <div className="header_b-wrapper2">
                                                <Link to={'/cart'} style={{backgroundColor: '#000', color: '#fff'}} className="header_b-button">
                                                    {t('header.card')}
                                                </Link>

                                                <Link to={'/checkout'} style={{backgroundColor: '#fff', color: '#000'}} className="header_b-button header_b-button2">
                                                    {t('header.checkout')}
                                                </Link>
                                            </div>
                                        </div>
                                    </ul>
                                )}
                                color="secondary"
                            >
                            <a href="#" className="header_toggle">
                                <img className='header_img' src={cart} alt="" />
                                <p className="header_text">{t('header.cart')}</p>
                            </a>
                        </Tooltip>
                        </li>

                        <li className='header_item'>
                        <Tooltip
                                key={1}
                                placement={'bottom'}
                                content={(
                                    <div className='header_tool'>
                                        <form  onSubmit={handleSubmit} action="">
                                        <input className='header_input' placeholder={t('header.search')} type="text" />
                                        <button style={{display: 'none'}} type='submit'></button>
                                        </form>
                                    </div>
                                )}
                                color="secondary"
                            >
                           <a href="#" className="header_toggle">
                                <img className='header_img' src={search} alt="" />
                                <p className="header_text">{t('header.search')}</p>
                            </a>
                        </Tooltip>
                        </li>

                        <li className='header_item'>
                          <select onChange={handleClcikLang} className='header_select'>
                            <option className='header_opt' value="eng">EN</option>
                            <option className='header_opt' value="ru">РУ</option>
                            <option className='header_opt' value="uz">UZ</option>
                          </select>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}