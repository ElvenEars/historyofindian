import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import css from './Map.module.css'

export default class Map extends Component {
  render() {
    return (
      <Container fluid className="h-90">
        <Row>
          <Col className={css.title}>
            find a diller
            </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={2} xl={2}>
            <Button size="lg" variant="danger" className="button red">
              MAP VIEW
            </Button>
          </Col>
          <Col md={2} xl={2}>
            <Button size="lg" className="button white">
              LIST
            </Button>
          </Col>
        </Row>
        <Row >
          <Col md={8} lg={8} xl={8}>
            <div className={css.img_warp}>
              <img
                src={require('../../../Images/Map/map-bg.png')}
                alt="map-bg"
              />
              <img
                src={require('../../../Images/Map/russia.png')}
                alt="map-bg"
                className={css.active}
              />
              <img
                src={require('../../../Images/Map/australia.png')}
                alt="map-bg"
              />
              <img
                src={require('../../../Images/Map/america.png')}
                alt="map-bg"
              />
            </div>
          </Col>
          <Col md={4} lg={4} xl={4} scrollable={true}>

            <Row className={css.form_title}>
              Location - Enter State and Postcode, Both are required
            </Row>
            <input type="text" className="form-control"></input>
            <Row>
              <Button size="lg" variant="danger" className="button red">
                FIND
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
