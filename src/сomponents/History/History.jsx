import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import Timeline from './TimeLine/TimeLine';

export default class History extends Component {
  render() {
    return (
      <Container fluid className="h-90">
        <Helmet>
          <body className="themeBlack" />
        </Helmet>
        <Timeline timeline = {this.props.timeline}/>
      </Container>
    );
  }
}
