import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import ShopComp from '../../components/shop/shop'
import {Accordion, AccordionItem} from "@nextui-org/react";
import './sidebar.scss'

export default function Sidebar() {
    return(
        <div className="">
                <Header/>
                <Links/>
                <Cumb title={'Shop'} sub={'shop'}/>
                <div className="sidebar">
                    <div className="container">
                        <div className="sidebar_container">
                            <div className="sidebar_left">
                                <h1 className="sidebar_heading">
                                    SORT BY
                                </h1>

                                <select className="sidebar_select">
                                    <option selected value="" className="sidebar_opt">Man</option>
                                    <option value="" className="sidebar_opt">Women</option>
                                    <option value="" className="sidebar_opt">Accessories</option>
                                    <option value="" className="sidebar_opt">Shoes</option>
                                </select>

                                <h1 className="sidebar_heading">
                                CATEGORIES
                                </h1>

                                <Accordion variant='splitted'>
      <AccordionItem itemClasses='sidebar_item' key="1" aria-label="Accordion 1"  title="SHOES">
        <p className="sidebar_text">
            Brand & Twist <br />
            Shoe Color <br />
            Shoe Color <br />
        </p>
      </AccordionItem>
      <AccordionItem itemClasses='sidebar_item'
        key="2"
        aria-label="Accordion 2"
        title="DUTY WEAR"
      >
         <p className="sidebar_text">
            Brand & Twist <br />
            Shoe Color <br />
            Shoe Color <br />
        </p>
      </AccordionItem>
      <AccordionItem itemClasses='sidebar_item' key="3" aria-label="Accordion 3" title="WORKOUT SHOES">
      <p className="sidebar_text">
            Brand & Twist <br />
            Shoe Color <br />
            Shoe Color <br />
        </p>
      </AccordionItem>
    </Accordion>

                            </div>

                            <ShopComp/>
                        </div>
                    </div>
                </div>
                <Footer/>
        </div>
    )
}