import Cumb from '../../components/breadcumb/breadcumb'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import './typography.scss'

export default function Typograpy() {
    return(
        <div className="typography">
                    <Header/>
                    <Links/>
                    <Cumb title={'Typography'} sub={'typography'}/>
                    <div className="type">
                        <h1 className="type_heading">
                        Typography (Heading)
                        </h1>

                        <h1 className='type_heading2'>H1 Heading</h1>
                        <h2 className='type_heading2'>H2 Heading</h2>
                        <h3 className='type_heading2'>H3 Heading</h3>
                        <h4 className='type_heading2'>H4 Heading</h4>
                        <h5 className='type_heading2'>H5 Heading</h5>
                        <h6 className='type_heading2'>H6 Heading</h6>

                        <h1 className="type_heading">
                        Paragraph
                        </h1>

                        <p className="type_text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat voluptas accusamus! Perspiciatis quam quisquam iste id officiis quia commodi quibusdam sapiente molestiae! Aliquam tempore ad quis, culpa sit ullam quam inventore voluptatum necessitatibus numquam! Tempora nobis iure cupiditate excepturi aliquid earum ratione dignissimos, a consequatur odio quo aut rem voluptatem quam repellat sint, eligendi facilis maiores unde, soluta quos, veritatis sit. Dolore deleniti dolorum repellendus dolorem cum, unde architecto consectetur odit rem eveniet, accusantium omnis suscipit totam quibusdam officiis blanditiis molestiae! Totam ipsam temporibus aspernatur praesentium quam, laboriosam ipsa rem. Maxime repudiandae molestias in consequuntur sint, dicta? Temporibus, fugiat! 
                        </p>

                        <h1 className="type_heading">
                        Blockquote
                        </h1>

                        <blockquote className='type_text2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae rem ut veritatis quisquam doloribus nam excepturi, deserunt odit, aut. Possimus blanditiis culpa natus eius non molestias nihil praesentium, vel ullam dolorum qui, quibusdam minima placeat officiis quod dolorem perferendis dicta harum ab obcaecati nemo! Quisquam, porro qui tempora, ducimus aspernatur vitae odit aliquid soluta eius tenetur, atque minima error est officiis itaque nobis voluptate? Modi aliquid reiciendis perspiciatis totam asperiores consequuntur sint molestias. Error quas quod voluptatem eligendi modi asperiores ipsam nemo, obcaecati provident omnis nisi dolorem aliquam sapiente, quidem, porro quo id fuga! Recusandae blanditiis aliquid repudiandae animi officia.
                        </blockquote>
                    </div>
                    <Footer/>
        </div>
    )
}