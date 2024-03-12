import { useTranslation } from 'react-i18next'
import './link.scss'
import { Link } from 'react-router-dom'
import { Tooltip } from '@nextui-org/react'

export default function Links() {
    const {t} = useTranslation()
    return (
        <section className="link">
            <div className="container">
                <ul className="link_container">
                    <Link to={'/'} className="link_item">
                        {t('link.home')}
                    </Link>
                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            content={(
                                <div className='link_tool'>
                                    <ul className="link_list">
                                       <li className="link_li">
                                            <p className="link_text">
                                                {t('link.pages')}
                                            </p>

                                            <Link to={'/shop'} className='link_link'>{t('link.shop')}</Link>
                                            <Link to={'/checkout'} className='link_link'>{t('header.checkout')}</Link>
                                            <Link to={'/cart'} className='link_link'>{t('link.cart')}</Link>
                                            <Link to={'/pricing'} className='link_link'>{t('link.pricing')}</Link>
                                       </li>

                                       <li className="link_li">
                                            <p className="link_text">
                                                {t('link.layout')}
                                            </p>

                                            <Link to={'/details'} className='link_link'>{t('link.details')}</Link>
                                            <Link to={'/sidebar'} className='link_link'>{t('link.sidebar')}</Link>
                                       </li>
                                    </ul>  
                                </div>
                                )}
                            color="secondary"
                            >
                           <select className='link_item'>
                                <option value="">{t('link.shop')}</option>
                            </select> 
                    </Tooltip>

                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            content={(
                                <div className='link_tool'>
                                     <ul className="link_list">
                                       <li className="link_li">
                                            <p className="link_text">
                                                {t('link.introduction')}
                                            </p>

                                            <Link to={'/contact'} className='link_link'>{t('link.contact')}</Link>
                                            <Link to={'/about'} className='link_link'>{t('link.about')}</Link>
                                            <Link to={'/404'} className='link_link'>{t('link.404')}</Link>
                                            <Link to={'/soon'} className='link_link'>{t('link.soon')}</Link>
                                            <Link to={'/faq'} className='link_link'>{t('link.faq')}</Link>
                                       </li>

                                       <li className="link_li">
                                            <p className="link_text">
                                                {t('link.dashboard')}
                                            </p>

                                            <Link to={'/interface'} className='link_link'>{t('link.interface')}</Link>
                                            <Link to={'/interface/orders'} className='link_link'>{t('link.orders')}</Link>
                                            <Link to={'/interface/address'} className='link_link'>{t('link.address')}</Link>
                                            <Link to={'/interface/profile'} className='link_link'>{t('link.profile')}</Link>
                                       </li>

                                       <li className="link_li">
                                            <p className="link_text">
                                                {t('link.utility')}
                                            </p>

                                            <Link to={'/login'} className='link_link'>{t('link.login')}</Link>
                                            <Link to={'/signin'} className='link_link'>{t('link.signin')}</Link>
                                            <Link to={'/forget'} className='link_link'>{t('link.forget')}</Link>
                                       </li>
                                    </ul>  
                                </div>
                            )}
                            color="secondary"
                            >
                        <select className='link_item'>
                            <option value="">{t('link.pages')}</option>
                        </select>   
                    </Tooltip>

                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            content={(
                                <div className='link_tool'>
                                    <Link to={'/left'} className='link_link'>{t('link.left')}</Link>
                                    <Link to={'/right'} className='link_link'>{t('link.right')}</Link>
                                    <Link to={'/full'} className='link_link'>{t('link.full')}</Link>
                                    <Link to={'/columns'} className='link_link'>{t('link.columns')}</Link>
                                    <Link to={'/single'} className='link_link'>{t('link.single')}</Link>
                                </div>
                            )}
                            color="secondary"
                            >
                            <select className='link_item'>
                                <option value="">{t('link.blog')}</option>
                            </select> 
                    </Tooltip>

                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            content={(
                                <div className='link_tool'>
                                    <Link to={'/typography'} className='link_link'>{t('link.typography')}</Link>
                                    <Link to={'/buttons'} className='link_link'>{t('link.buttons')}</Link>
                                    <Link to={'/alerts'} className='link_link'>{t('link.alerts')}</Link>
                                </div>
                            )}
                            color="secondary"
                            >
                            <select className='link_item'>
                                <option value="">{t('link.elements')}</option>
                            </select>
                    </Tooltip>
                </ul>
            </div>
        </section>
    )
}