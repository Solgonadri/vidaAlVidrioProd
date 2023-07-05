import './App.css'
import Gallery from './page/Gallery'
import img1 from './../public/imgs/img1.jpeg'
import img2 from './../public/imgs/pgn.img.03.jpeg'
import img3 from './../public/imgs/pgn.img.04.jpeg'
import img4 from './../public/imgs/pgn.img.06.jpeg'
import Footer from './footer/Footer'
import { SocialIcon } from 'react-social-icons'
import Header from './header/Hader'
import { Layout} from "antd";

function App () {
  const { Content } = Layout;
  return (
    <Layout>
      <Content className="content">
        <div className="div_login">
          <Header/>
          <section id='section-p'>
            <div className='container'>
              <div className='txt-aling'>
                <h2>EXPERTOS EN CANCELES, VIDRIOS Y VENTANAS.
                  COMPRA, VENTA INSTALACION Y DISEÑO.
                </h2>
              </div>
              <div className='parrafoUno'>
                <p className='parrafo'>Decoracion y seguridad al maximo,
                  con los mejores productos
                  y servicios al cliente
                </p>
              </div>
            </div>
            <div className='box-derecha'>
              <img src={img1} className='img-section--1' alt='' />
            </div>
            <div className='box-izquierda'>
              <img src={img2} alt='' className='img-section--2' />
            </div>
            <div className='textoTres'>
              <h3 className='textoDos'>Amplia variedad de Servicios</h3>
              <p className='parrafoDos-l'>Ofrecemos diferentes opciones y diseños para que
                puedas elegir la mejor de acuerdo a tus necesidades y
                gustos.
              </p>
            </div>
          </section>
          <section id='seccion-2'>
            <div>
              <h4 className='textoCuatro'>Servicio de instalacion de alta Calidad</h4>
              <p className='parrafoCuatro'>Nos aseguramos de que la instalación de nuestros
                productos sea impecable, para que tengas la seguridad
                de que durarán mucho tiempo.
              </p>
            </div>
            <div>
              <img src={img3} alt='' className='img-section--3' />
            </div>
            <div>
              <img src={img4} alt='' className='img-section--4' />
            </div>
            <div className='h5'>
              <h5 className='textoCinco'>Asesoría personlizada.</h5>
              <p className='parrafoCinco'>Damos recomendaciones y sugerencias para que tomes la mejor decisión
                al momento de eligir tus productos y ajustarnos a tus necesidades
              </p>
            </div>
          </section>
          <Gallery />
          <Footer />
        </div>
      </Content>
    </Layout>
  )
}

export default App
