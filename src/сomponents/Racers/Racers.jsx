import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import css from './Racers.module.css'

export default class Racers extends Component {
  render() {
    return (

      <Container fluid className="h-90">
        <Helmet>
          <body className="themeWhite" />
        </Helmet>
        <Row className="h-100 align-content-center ">
          <Col>
            <Row className="justify-content-center pb-5">
              <Col xs={10} sm={10} md={8} lg={6} className="align-items-center m-auto">
                <h2 className={css.racers__title}>Bert Monroe and his fastest Indian.</h2>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className={css.racers__text} xs={10} sm={10} md={6} lg={5}>
                <p>
                  The story of Bert Monroe, described in the movie "Fastest Indian", makes you believe in the most incredible dreams.
                  Bert Monroe perfected his 1920's Indian Scout, 44 year old, and dreamed of becoming the fastest motorcycle in the world.
                  In an age of high technology and huge budgets, Bert fought for speed, having only an old motorcycle and his own pair of hands.
                  And yet his dream was destined to come true. In 1967, Bert Munro set a world motorcycle speed record on the famous salt lake in Bonneville.
                  By that time, Scout was 47 years old, and Bert himself was 68. Now Bert's motorcycle is in New Zealand, in the club of enthusiasts of the southern islands.
                  </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
