import React from 'react'
//import './../App.css'
import Carousel from 'better-react-carousel'
/*import c1 from '../../public/imgs/Carrusel/c1.jpeg'
import c2 from '../../public/imgs/Carrusel/c2.jpeg'
import c3 from '../../public/imgs/Carrusel/c3.jpeg'
import c4 from '../../public/imgs/Carrusel/c4.jpeg'
import c5 from '../../public/imgs/Carrusel/c5.jpeg'
import c6 from '../../public/imgs/Carrusel/c6.jpeg'
import c7 from '../../public/imgs/Carrusel/c7.jpeg'
import c8 from '../../public/imgs/Carrusel/c8.jpeg'
import c9 from '../../public/imgs/Carrusel/c9.jpeg'
import c10 from '../../public/imgs/Carrusel/c10.jpeg'*/

const Gallery = () => {

  /**
   * <Carousel.Item>
            <img width='50%' src={c1} className='c1' />
          </Carousel.Item>
          <Carousel.Item>
            <img width='50%' src={c2} className='c2' />
          </Carousel.Item>
          <Carousel.Item>
            <img width='50%' src={c3} className='c3' />
          </Carousel.Item>
          <Carousel.Item>
            <img width='50%' src={c4} className='c4' />
          </Carousel.Item>
          <Carousel.Item>
            <img width='50%' src={c5} className='c5' />
          </Carousel.Item>
          <Carousel.Item>
            <img width='50%' src={c6} className='c6' />
          </Carousel.Item>
          <Carousel.Item>
            <img width='50%' src={c7} className='c7' />
          </Carousel.Item>
          <Carousel.Item>
            <img width='50%' src={c8} className='c8' />
          </Carousel.Item>
          <Carousel.Item>
            <img width='50%' src={c9} className='c9' />
          </Carousel.Item>
          <Carousel.Item>
            <img width='50%' src={c10} className='c10' />
          </Carousel.Item>
   */
  return (
    <>
      <div className='galleryContainer'>
        <Carousel cols={2} rows={1} gap={10} loop>
          <Carousel.Item>
            <img width='50%' src="./../../public/imgs/Carrusel/c10.jpeg" className='c10' />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Gallery
