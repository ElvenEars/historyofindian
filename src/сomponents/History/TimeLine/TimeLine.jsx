import React, { Component } from 'react';
import TimeSpan from './TimeSpan/TimeSpan';
import { div, Row, Container } from 'react-bootstrap';
import css from './TimeLine.module.css'

export default class Timeline extends Component {
  render() {
    console.log(this.props)
    return (
      <>
        <TimeSpan years={this.props.timeline.years} />
        <Container>
            <Row>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              1900
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              1910
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              1920
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              1930
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              1940
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              1950
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              1960
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              1970
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              1980
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              1900
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              2000
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            </Row>
        </Container>
      </>
    );
  }
}
