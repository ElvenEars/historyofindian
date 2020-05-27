import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import css from './Map.module.css'

export default class Map extends Component {
  render() {
    return (
     
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
          <Col md={4} lg={4} xl={4}>

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

    );
  }
}
