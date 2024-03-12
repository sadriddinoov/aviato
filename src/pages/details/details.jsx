import { Link } from 'react-router-dom'
import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './details.scss'
import product1 from '../../assets/product-1.png'
import product2 from '../../assets/product-2.png'
import product3 from '../../assets/product-3.png'
import product4 from '../../assets/product-4.png'
import product5 from '../../assets/product-5.png'
import product6 from '../../assets/product-6.png'   
import { useState } from 'react'
import {Tabs, Tab, Card, CardBody, Tooltip} from "@nextui-org/react";
import avatar1 from '../../assets/avater-1.jpg'
import avatar2 from '../../assets/avater-2.jpg'
import avatar4 from '../../assets/avater-4.jpg'
import cart from '../../assets/cart.jpg'
import search from '../../assets/search.svg'
import heart from '../../assets/heart.svg'
import { useTranslation } from 'react-i18next'



export default function Details() {
    const images = [
        product1,
        product2,
        product3,
        product4,
        product5,
        product6
    ]

    const {t} = useTranslation()

    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
    const prevSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    
    return(
        <div className="">
                    <Header/>
                    <Links/>
                    <div className="wraper">
                        <Cumb title={'Shop'} sub={'Single Product'}/>
                        <Link to={'/left'} className="text">Next   /    Preview</Link>
                    </div>

                    <div className="detail">
                       <div className="detail_w">
                       <div className="detail_left">
                        <button onClick={prevSlide} className="detail__btn detail__btn--prev">&lt;</button>
                        <img
                        src={images[activeIndex]}
                        alt={`Slide ${activeIndex}`}
                        className="detail_l-img"
                        />
                        <button onClick={nextSlide} className="detail__btn detail__btn--next">
                        &gt;
                        </button>
                        </div>

                        <div className="detail_right">
                            <h1 className="detail_r-heading">
                            Eclipse Crossbody
                            </h1>

                            <p className="detail_r-price">
                                $300
                            </p>
                            
                            <p className="detail_r-price">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a consequatur beatae nostrum, earum consequuntur? Eveniet consequatur ipsum dicta recusandae. <br /> <br />

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, velit, sunt temporibus, nulla accusamus similique sapiente tempora, at atque cumque assumenda minus asperiores est esse sequi dolore magnam. Debitis, explicabo.
                            </p>

                            <div className="detail_r-wrap">
                                <h2 className="detail_r-cat">
                                    Color:
                                </h2>

                                <div className="detail_r-cl">
                                    <div style={{backgroundColor: '#8da1cd'}} className="detail_color">
                                    </div>

                                    <div style={{backgroundColor: '#000'}} className="detail_color">
                                        
                                    </div>

                                    <div style={{backgroundColor: '#e6e2d6'}} className="detail_color">
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="detail_r-wrap">
                                <h2 className="detail_r-cat">
                                    Size:
                                </h2>

                                <select className="detail_r-select">
                                    <option selected className='detail_r-opt'>S</option>
                                    <option className='detail_r-opt'>M</option>
                                    <option className='detail_r-opt'>L</option>
                                    <option className='detail_r-opt'>XL</option>
                                </select>
                            </div>

                            <div className="detail_r-wrap">
                                <h2 className="detail_r-cat">
                                    Categories:
                                </h2>

                                <div style={{display: 'flex', gap: '5px'}}>
                                    <p className="detail_categor">
                                        Products
                                    </p>

                                    <p className="detail_categor">
                                        Shop
                                    </p>
                                </div>
                            </div>

                            <Link className='detail_link' to={'/cart'}>Add to Cart</Link>
                            
                        </div>
                       </div>

                       <div className="detail_b flex w-full flex-col">
                       <Tabs aria-label="Options">
                        <Tab className='detail_b-btn' key="Details" title="Details">
                        <Card>
                        <CardBody className='detail_b-wrapper'>
                        <h2 className="detail_b-heading">
                        Product Description
                        </h2>
                        <p className="detail_r-price">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut per spici <br /> <br />

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis delectus quidem repudiandae veniam distinctio repellendus magni pariatur molestiae asperiores animi, eos quod iusto hic doloremque iste a, nisi iure at unde molestias enim fugit, nulla voluptatibus. Deserunt voluptate tempora aut illum harum, deleniti laborum animi neque, praesentium explicabo, debitis ipsa?
                        </p>
                        </CardBody>
                        </Card>  
                        </Tab>
                        <Tab className='detail_b-btn' key="Reviews" title="Reviews (3)">
                        <Card>
            <CardBody className='detail_b-wrapper'>
              <ul className='detail_b-list'>
                <li className="detail_b-item">
                    <img src={avatar1} alt="" className="detail_b-img" />

                    <div>
                        <h3 className="detail_b-name">
                            JONATHON ANDREW
                        </h3>

                        <p className="detail_b-date">
                        July 02, 2015, at 11:34
                        </p>

                        <p className="detail_r-price">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum minima, reprehenderit laboriosam officiis praesentium? Impedit minus provident assumenda quae.
                        </p>
                    </div>
                </li>

                <li className="detail_b-item">
                    <img src={avatar2} alt="" className="detail_b-img" />

                    <div>
                        <h3 className="detail_b-name">
                            JONATHON ANDREW
                        </h3>

                        <p className="detail_b-date">
                        July 02, 2015, at 11:34
                        </p>

                        <p className="detail_r-price">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum minima, reprehenderit laboriosam officiis praesentium? Impedit minus provident assumenda quae.
                        </p>
                    </div>
                </li>

                <li className="detail_b-item">
                    <img src={avatar4} alt="" className="detail_b-img" />

                    <div>
                        <h3 className="detail_b-name">
                            JONATHON ANDREW
                        </h3>

                        <p className="detail_b-date">
                        July 02, 2015, at 11:34
                        </p>

                        <p className="detail_r-price">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum minima, reprehenderit laboriosam officiis praesentium? Impedit minus provident assumenda quae.
                        </p>
                    </div>
                </li>
              </ul>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
                       </div>

                       <h2 className="bottom_heading">
                       RELATED PRODUCTS
                       </h2>

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
                       </ul>
                    </div>
                    <Footer/>
        </div>
    )
}