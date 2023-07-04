import './App.css'
import Gallery from './page/Gallery.jsx'
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
              <img src='./../public/imgs/WhatsApp Image 2022-10-28 at 21.39.00 (6).jpeg' className='img-section--1' alt='' />
            </div>
            <div className='box-izquierda'>
              <img src='./../public/imgs/pgn.img.03.jpeg' alt='' className='img-section--2' />
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
              <img src='./../public/imgs/pgn.img.04.jpeg' alt='' className='img-section--3' />
            </div>
            <div>
              <img src='./../public/imgs/pgn.img.06.jpeg' alt='' className='img-section--4' />
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
