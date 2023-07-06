import React from 'react'
import '../App.css'
import Logo from '../../public/imgs/house-window-icon-free-vector.jpg'
import {Layout, Row, Col} from "antd"; //Se importan los componentes de ant desig
import { SocialIcon } from 'react-social-icons'
import './Header.scss'

const Header = () => {
  const { Header } = Layout;
  return (
        <Header id='header-context' className="content">
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              <div className="menu-top">
              <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                  <img src={Logo} width='50px' className='img-bajoSlogan' />
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Row>
                    <Col>
                      <h1 className='context-title'>VidaAlvidrio</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className='slogan'>Estructura, Diseño y Elegancia</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                   <div>
                      <a
                        href='https://wa.me/525517512462'
                        target='_blank'
                        className='wps'
                        rel='noreferrer'
                      >
                        <SocialIcon network='whatsapp' />
                      </a>
                   </div>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                    <a
                      href='https://www.facebook.com/people/Vidaal-Vidrio/pfbid02MrnPp3qnarw7N8a6PZnLLTnojXuSWs9H5RqXFCWjr2epEcqU1km78sVNapjvgQ2vl/?mibextid=ZbWKwL'
                      target='_blank' className='facebook'
                      rel='noreferrer'
                    >
                      <SocialIcon network='facebook' />
                    </a>
                </Col>
              </Row>
              </div>
              
            </Col>
          </Row>
        </Header>
  );
}

export default Header;