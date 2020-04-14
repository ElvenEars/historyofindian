import React, { Component } from 'react';
import { Navbar, Container, Nav,  Col, Row } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import logo from '../../Images/logo.png'
import css from './header.module.css'


export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" >
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="57"
                width="155"
                leaft="67px"
                top="40px"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="ml-auto text-uppercase">
                <NavLink to="/motorcycles" className="nav-link"> Motorcycles</NavLink>
                <NavLink to="/history"  className="nav-link"> History</NavLink>
                <NavLink to="/racers"  className="nav-link">Racers</NavLink>
                <NavLink to="/find-dillers"  className="nav-link"> Find dillers</NavLink>
                <NavLink to="/gallery"  className="nav-link"> Gallery </NavLink>
              </Nav>
              <Row className={`${css.icons} d-sm-display d-md-none`} >
                <Col className={css.icons__istagram_sm} sm={1}>
                </Col>
                <Col className={css.icons__youtube_sm} sm={1}>
                </Col>
                <Col className={css.icons__fb_sm} sm={1}>
                </Col>
              </Row>
              <Row className={`${css.languages} d-sm-display d-md-none`}>
                <Col sm={1} xs={1}>
                  En
                </Col>
                <Col sm={1} xs={1}>
                  De
                </Col>
                <Col sm={1} xs={1}>
                  Fr
                </Col>
              </Row>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
