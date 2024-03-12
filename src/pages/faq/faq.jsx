import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './faq.scss'

export default function Faq() {
    return(
        <div className="">
            <Header/>
            <Links/>
            <Cumb title={'Frequently Asked Questions'} sub={'f.a.q'} />
            <div className="faq">
                <div className="container">
                    <div className="faq_container">
                        <div className="faq_left">
                            <h1 className="faq_l-heading">Frequently Asked Questions</h1>
                            <p className="faq_l-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, repudiandae. <br /> <br /> admin@mail.com</p>
                        </div>

                        <div className="faq_right">
                            <h2 className="faq_r-heading">
                            Order Status
                            </h2>

                            <p className="faq_r-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto, alias, tempora fuga quam eveniet neque excepturi aliquid. Eligendi, mollitia.
                            </p>

                            <h2 className="faq_r-heading">
                            Shipping & Delivery
                            </h2>

                            <p className="faq_r-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatibus, incidunt similique nobis sint quisquam nam ab error consequuntur sit ullam ex eum exercitationem, excepturi explicabo beatae eos aspernatur odit ad perspiciatis, neque saepe magni enim. Maiores quia, quae sequi.
                            </p>

                            <h2 className="faq_r-heading">
                            Payments
                            </h2>

                            <p className="faq_r-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus repellat id, laboriosam ipsa repudiandae quisquam, suscipit officiis, praesentium itaque facilis distinctio dolorum. Velit reiciendis libero laudantium corporis, delectus impedit sunt.
                            </p>

                            <h2 className="faq_r-heading">
                            Returns & Exchanges
                            </h2>

                            <p className="faq_r-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque nam, ab voluptas et debitis sint hic vel ratione dignissimos.
                            </p>

                            <h2 className="faq_r-heading">
                            Privacy Policy
                            </h2>

                            <p className="faq_r-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis quod saepe, inventore ipsum sint cum iste quae ratione nobis laborum minima autem totam similique, quia neque deleniti! Provident, suscipit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}