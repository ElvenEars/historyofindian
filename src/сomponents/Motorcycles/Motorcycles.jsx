import React, { Component } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import css from './Motorcycles.module.css'

export default class Motocycles extends Component {
  render() {
    return (
      <Container fluid className="h-90">
        <Helmet>
          <body className="themeBlack" />
        </Helmet>
        <Row className="h-100 align-content-center ">
          <Col>
            <Row className="justify-content-center ">
              <Col md="6" lg="10">
                <div className={css.main__title}>
                  History <br></br>of the legend
            </div>
              </Col>
            </Row>
            <Row className="justify-content-center ">
              <Col md="6">
                <div className={css.main__text}>
                  ~ Since 1901 ~
            </div>
              </Col>
            </Row>
            <Row className="justify-content-center ">
              <Col xs={3} sm={3} md={3} lg={2} xl={2}>
                <Button size="lg" variant="danger" className="button red">
                  Go to timeline
              </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

    );
  }
}
