import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import Map from './Map/Map'
import List from './List/List'
import css from './FindDillers.module.css'

export default class FindDillers extends Component {
  render() {
    return (
      <Container fluid className="h-90">
        <Helmet>
          <body className="themeWhite map" />
        </Helmet>
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
        <Map map={this.props.map}/>
        <List map={this.props.map}/>
        </Container>
    );
  }
}
