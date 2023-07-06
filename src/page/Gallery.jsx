import './../App.css'
import './Galery.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import c1 from '../../public/imgs/Carrusel/c1.jpeg'
import c2 from '../../public/imgs/Carrusel/c2.jpeg'
import c3 from '../../public/imgs/Carrusel/c3.jpeg'
import c4 from '../../public/imgs/Carrusel/c4.jpeg'
import c5 from '../../public/imgs/Carrusel/c5.jpeg'
import c6 from '../../public/imgs/Carrusel/c6.jpeg'
import c7 from '../../public/imgs/Carrusel/c7.jpeg'
import c8 from '../../public/imgs/Carrusel/c8.jpeg'
import c9 from '../../public/imgs/Carrusel/c9.jpeg'
import c10 from '../../public/imgs/Carrusel/c10.jpeg'

const Gallery = () => {
  return (
    <>
      <div id='container-c--1' className="content">
        <Carousel showArrows infiniteLoop className='custom-carousel'>
          <div>
            <img src={c1} alt='' className='' />
          </div>
          <div>
            <img src={c2} alt='' />
          </div>
          <div>
            <img src={c3} alt='' />
          </div>
          <div>
            <img src={c4} alt='' />
          </div>
          <div>
            <img src={c5} alt='' />
          </div>
          <div>
            <img src={c6} alt='' />
          </div>
          <div>
            <img src={c7} alt='' />
          </div>
          <div>
            <img src={c8} alt='' />
          </div>
          <div>
            <img src={c9} alt='' />
          </div>
          <div>
            <img src={c10} alt='' />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default Gallery
