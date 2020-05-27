import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import Map from './Map/Map'
import List from './List/List'
import css from './FindDillers.module.css'

export default class FindDillers extends Component {
  constructor(props) {
    super(props);
    this.handleMapClick = this.handleMapClick.bind(this)
    this.handleListClick = this.handleListClick.bind(this)
    this.state = {
      isMap: true
    }
  }
  handleMapClick() {
    this.setState({ isMap: true });
  }
  handleListClick() {
    this.setState({ isMap: false });
  }
  render() {
    const isMap = this.state.isMap
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
            <Button size="lg" variant="danger" className="button red" onClick={this.handleMapClick}>
              MAP VIEW
            </Button>
          </Col>
          <Col md={2} xl={2}>
            <Button size="lg" className="button white" onClick = {this.handleListClick}>
              LIST
            </Button>
          </Col>
        </Row>
        {isMap ? (
          <Map map={this.props.map.countries} />
        ) : (
            <List map={this.props.map.countries} />
          )
        }
      </Container>
    );
  }
}
