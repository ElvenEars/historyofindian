import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import css from './footer.module.css'

export default class Footer extends Component {
    render() {
        return (
            <Container fluid className="">
                <footer className={`d-sm-none d-md-block ${css.footer}`}>
                    <Row className="justify-content-between ">
                        <Col xs={4} sm={3} md={3} lg={2} xl={2} className="ml-5">
                            <Row >
                                <div className={`icons__instagram mr-3`}></div>
                                <div className={`icons__youtube mr-2`}></div>
                                <div className={`icons__fb mr-3`}></div>
                            </Row>
                        </Col>
                        <Col xs={4} sm={3} md={3} lg={2} xl={2} className="text-center">
                            Made by Alena Chvileva. 
                        </Col>
                        <Col  xs={4} sm={3} md={3} lg={2} xl={2} className="mr-5">
                            <Row className={`languages justify-content-end`}>
                                <div className="ml-2"><a href="/">En</a></div>
                                <div className="ml-2"><a href="/">De</a></div>
                                <div className="ml-2"><a href="/">Fr</a></div>
                            </Row>
                        </Col>
                    </Row>
                </footer>
            </Container>
        );
    }
}
