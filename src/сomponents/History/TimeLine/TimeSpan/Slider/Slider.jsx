import React, { Component } from 'react';
import css from './Slider.module.css'
import { Row, Col } from 'react-bootstrap'

export default class Slider extends Component {

  render() {
    this.img = require(`../../../../../Images/History/${this.props.image}`)
    return (
      <Row className="h-100">
          <Col>
            <Row className="justify-content-center pb-5">
              <Col xs={10} sm={10} md={8} lg={6} className="align-items-center m-auto">
                <h2 className={css.history__title}>{this.props.title}</h2>
                <p className={css.history__comment}>{this.props.comment}</p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className={css.history__text} xs={10} sm={10} md={6} lg={5}>
                {this.props.text}
              </Col>
              <Col xs={10} sm={10} md={6} lg={5}>
                <img
                  className={`${css.history__img} img-fluid`}
                  src={this.img}
                  alt="Motorcycle 1940">
                </img>
              </Col>
            </Row>
          </Col>
      </Row>
    );
  }
}
