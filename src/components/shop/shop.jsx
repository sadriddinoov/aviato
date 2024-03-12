import { useTranslation } from 'react-i18next'
import './shop.scss'
import product1 from '../../assets/product-1.png'
import product2 from '../../assets/product-2.png'
import product3 from '../../assets/product-3.png'
import product4 from '../../assets/product-4.png'
import product5 from '../../assets/product-5.png'
import product6 from '../../assets/product-6.png'
import product7 from '../../assets/product-7.png'
import product8 from '../../assets/product-8.png'
import product9 from '../../assets/product-9.png'
import search from '../../assets/search.svg'
import heart from '../../assets/heart.svg'
import cart from '../../assets/cart.svg'
import { Tooltip } from '@nextui-org/react'


export default function ShopComp() {
    const {t} = useTranslation()
    return (
        <section className="shopcomp">
            <div className="container">
            <ul className="shopcomp_list">
            <Tooltip
                            key={1}
                            placement={'bottom'}
                            offset={-175}
                            content={(
                                <div className='shopcomp_wrap'>
                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={search} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={heart} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={cart} alt="" />
                                    </div>
                                </div>
                            )}
                            color="secondary"
                            >
                           <li className="shopcomp_item">
                            <div className="shopcomp_div">
                            <img src={product1} alt="" className="shopcomp_img" />
                            </div>
                            <h3 className="shopcomp_heading">
                                {t('products.reef')}
                            </h3>

                            <p className="shopcomp_price">
                                $200
                            </p>
                           </li>
                    </Tooltip>

                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            offset={-175}
                            content={(
                                <div className='shopcomp_wrap'>
                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={search} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={heart} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={cart} alt="" />
                                    </div>
                                </div>
                            )}
                            color="secondary"
                            >
                           <li className="shopcomp_item">
                            <div className="shopcomp_div">
                            <img src={product2} alt="" className="shopcomp_img" />
                            </div>
                            <h3 className="shopcomp_heading">
                                {t('products.rainbow')}
                            </h3>

                            <p className="shopcomp_price">
                                $200
                            </p>
                           </li>
                    </Tooltip>

                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            offset={-175}
                            content={(
                                <div className='shopcomp_wrap'>
                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={search} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={heart} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={cart} alt="" />
                                    </div>
                                </div>
                            )}
                            color="secondary"
                            >
                           <li className="shopcomp_item">
                            <div className="shopcomp_div">
                            <img src={product3} alt="" className="shopcomp_img" />
                            </div>
                            <h3 className="shopcomp_heading">
                                {t('products.strayhorn')}
                            </h3>

                            <p className="shopcomp_price">
                                $230
                            </p>
                           </li>
                    </Tooltip>

                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            offset={-175}
                            content={(
                                <div className='shopcomp_wrap'>
                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={search} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={heart} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={cart} alt="" />
                                    </div>
                                </div>
                            )}
                            color="secondary"
                            >
                           <li className="shopcomp_item">
                            <div className="shopcomp_div">
                            <img src={product4} alt="" className="shopcomp_img" />
                            </div>
                            <h3 className="shopcomp_heading">
                                {t('products.bradley')}
                            </h3>

                            <p className="shopcomp_price">
                                $200
                            </p>
                           </li>
                    </Tooltip>

                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            offset={-175}
                            content={(
                                <div className='shopcomp_wrap'>
                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={search} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={heart} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={cart} alt="" />
                                    </div>
                                </div>
                            )}
                            color="secondary"
                            >
                           <li className="shopcomp_item">
                            <div className="shopcomp_div">
                            <img src={product5} alt="" className="shopcomp_img" />
                            </div>
                            <h3 className="shopcomp_heading">
                                {t('products.reef')}
                            </h3>

                            <p className="shopcomp_price">
                                $200
                            </p>
                           </li>
                    </Tooltip>

                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            offset={-175}
                            content={(
                                <div className='shopcomp_wrap'>
                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={search} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={heart} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={cart} alt="" />
                                    </div>
                                </div>
                            )}
                            color="secondary"
                            >
                           <li className="shopcomp_item">
                            <div className="shopcomp_div">
                            <img src={product6} alt="" className="shopcomp_img" />
                            </div>
                            <h3 className="shopcomp_heading">
                                {t('products.rainbow')}
                            </h3>

                            <p className="shopcomp_price">
                                $200
                            </p>
                           </li>
                    </Tooltip>

                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            offset={-175}
                            content={(
                                <div className='shopcomp_wrap'>
                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={search} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={heart} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={cart} alt="" />
                                    </div>
                                </div>
                            )}
                            color="secondary"
                            >
                           <li className="shopcomp_item">
                            <div className="shopcomp_div">
                            <img src={product7} alt="" className="shopcomp_img" />
                            </div>
                            <h3 className="shopcomp_heading">
                                {t('products.strayhorn')}
                            </h3>

                            <p className="shopcomp_price">
                                $230
                            </p>
                           </li>
                    </Tooltip>

                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            offset={-175}
                            content={(
                                <div className='shopcomp_wrap'>
                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={search} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={heart} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={cart} alt="" />
                                    </div>
                                </div>
                            )}
                            color="secondary"
                            >
                           <li className="shopcomp_item">
                            <div className="shopcomp_div">
                            <img src={product8} alt="" className="shopcomp_img" />
                            </div>
                            <h3 className="shopcomp_heading">
                                {t('products.bradley')}
                            </h3>

                            <p className="shopcomp_price">
                                $200
                            </p>
                           </li>
                    </Tooltip>

                    <Tooltip
                            key={1}
                            placement={'bottom'}
                            offset={-175}
                            content={(
                                <div className='shopcomp_wrap'>
                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={search} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={heart} alt="" />
                                    </div>

                                    <div className="shopcomp_img-wrap">
                                        <img className='shopcomp_img2' src={cart} alt="" />
                                    </div>
                                </div>
                            )}
                            color="secondary"
                            >
                           <li className="shopcomp_item">
                            <div className="shopcomp_div">
                            <img src={product9} alt="" className="shopcomp_img" />
                            </div>
                            <h3 className="shopcomp_heading">
                                {t('products.reef')}
                            </h3>

                            <p className="shopcomp_price">
                                $200
                            </p>
                           </li>
                    </Tooltip>
                </ul>
            </div>
        </section>
    )
}