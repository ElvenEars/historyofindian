import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import css from './Gallery.module.css'

export default class Gallery extends Component {
  render() {
    return (
      <Container fluid className="h-90">
        <Helmet>
          <body className="themeBlack" />
        </Helmet>
        <Row className="h-100 justify-content-center align-content-center">

          <Col className={css.gallery__main} md={8}>  
            <img 
              src={require(`../../Images/Gallery/slide1.png`)}
              alt="slide 1">
            </img>
          </Col>
          <Col md={2} className={css.gallery__slider}>
            <div className={css.gallery__slider_up}></div>
            <Row>
            <img
              src={require(`../../Images/Gallery/slide2.png`)}
              alt="slide 2">
            </img>
            </Row>
            <Row>
            <img
              src={require(`../../Images/Gallery/slide3.png`)}
              alt="slide 3">
            </img>
            </Row>
            <Row>
            <img
              src={require(`../../Images/Gallery/slide4.png`)}
              alt="slide 4">
            </img>
            </Row>
            <Row>
            <img
              src={require(`../../Images/Gallery/slide5.png`)}
              alt="slide 5">
            </img>
            </Row>
            <div className={css.gallery__slider_down}></div>
          </Col>
        </Row>
      </Container>
    );
  }
}
