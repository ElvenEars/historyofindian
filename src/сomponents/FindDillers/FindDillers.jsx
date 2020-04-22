import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import Map from './Map/Map'

export default class FindDillers extends Component {
  render() {
    return (
      <Container fluid className="h-90">
        <Helmet>
          <body className="themeWhite" />
        </Helmet>
        <Map/>
        </Container>
    );
  }
}
