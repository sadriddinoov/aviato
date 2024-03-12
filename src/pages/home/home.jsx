import { useTranslation } from 'react-i18next'
import './home.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Links from '../../components/link/link'
import Carousel from '../../components/carousel/carousel'
import slider1 from '../../assets/slider-1.jpg'
import slider2 from '../../assets/slider-2.jpg'
import slider3 from '../../assets/slider-3.jpg'
import category1 from '../../assets/category-1.jpg'
import category2 from '../../assets/category-2.jpg'
import category3 from '../../assets/category-3.jpg'
import ShopComp from '../../components/shop/shop'

export default function Home() {
    const {t} = useTranslation()

    const bootstrap = [
       slider1,
       slider2,
       slider3
    ]

    return (
        <>
            <Header/>
            <Links/>
            <Carousel images={bootstrap} />
            <section className="category">
                <div className="container">
                    <div className="category_container">
                        <h1 className="category_heading">
                            {t('category.category')}
                        </h1>

                        <div className="category_wrapper">
                            <div>
                                <div className="category_w-img">
                                    <img className='category_img' src={category1} alt="" />
                                    <div className="category_position">
                                    <h2 className="category_sub">
                                        {t('category.sales')}
                                    </h2>

                                    <p className="category_text">{t('category.season')}</p>
                                    </div>
                                </div>

                                <div className="category_w-img">
                                    <img className='category_img' src={category2} alt="" />
                                    <div className="category_position">
                                    <h2 className="category_sub">
                                        {t('category.smart')}
                                    </h2>

                                    <p className="category_text">{t('category.get')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="category_w-img">
                                    <img className='category_img2' src={category3} alt="" />
                                    <div className="category_position">
                                    <h2 className="category_sub">
                                        {t('category.jewellery')}
                                    </h2>

                                    <p className="category_text">{t('category.season')}</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="homesh">
                <div className="container">
                    <div className="homesh_container">
                        <h2 className="homesh_heading">
                            {t('products.trendy')}
                        </h2>

                        <ShopComp/>
                    </div>
                </div>
            </section>
            <section className="instagram">
                <div className="container">
                    <div className="instagram_container">
                        <h3 className="instagram_heading">
                            {t('subscribe.subscribe')}
                        </h3>

                        <p className="instagram_text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum iste dolor sapiente neque assumenda corporis eveniet nesciunt obcaecati dolorem!
                        </p>

                        <div className="instagram_wrap">
                            <input placeholder={t('subscribe.email')} type="text" className="instagram_input" />
                            <button className="instagram_btn">{t('subscribe.now')}</button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="wrapper">
                <h1 className="wrapper_heading">
                    {t('subscribe.view')}
                </h1>
            </div>
            <Footer/>
        </>
    )
}