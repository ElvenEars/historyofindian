import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import { Helmet } from 'react-helmet'

export default class Gallery extends Component {
  render() {
    return (
      <Container fluid className="h-90">
        <Helmet>
          <body className="themeBlack" />
        </Helmet>
        </Container>
    );
  }
}
