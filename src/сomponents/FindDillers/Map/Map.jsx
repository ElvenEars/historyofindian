import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import css from './Map.module.css'

export default class Map extends Component {
  render() {
    return (
      <Container fluid className="h-90">
            <Row >
                <Col md={8}>
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
                <Col md={4}>
                  
                </Col>
            </Row>
      </Container>
    );
  }
}
