import React from 'react'
import './../App.css'
import './Galery.css'
import {Layout, Row, Col} from "antd";
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react'
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

          <Carousel cols={2} rows={1} gap={10} loop>
          <Carousel.Item>
            <img width='50%' src={c1} className='c10' />
          </Carousel.Item>
        </Carousel>
   */
  return (
    
      <div className='galleryContainer'>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <CCarousel controls indicators>
              <CCarouselItem>
                <CImage className="d-block w-100" src={c1}  width='60%'/>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={c2} width='60%'/>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={c3} width='60%'/>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={c4} width='60%'/>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={c5} width='60%'/>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={c6} width='60%'/>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={c7} width='60%'/>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={c8} width='60%'/>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={c9} width='60%'/>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={c10} width='60%'/>
              </CCarouselItem>
            </CCarousel>
          </Col>
        </Row>
        
      </div>
    
  )
}

export default Gallery
