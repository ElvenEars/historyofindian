import React, { Component } from 'react';
import TimeSpan from './TimeSpan/TimeSpan';
import { div, Row, Container } from 'react-bootstrap';
import css from './TimeLine.module.css'

export default class Timeline extends Component {
  render() {
    return (
      <>
        <TimeSpan years={this.props.timeline.years} />
        <Container className="align-bottom">
            <Row className="w-100 justify-content-between mx-auto align-bottom">
            <div className={css.timeline__year_prev}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
              1900
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year}`}>
              1910
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year}`}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
              1920
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
              1930
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
              1940
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} ${css.active}`}>
              1950
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
              1960
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
              1970
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
              1980
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
              1900
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={`${css.timeline__year} `}>
              2000
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={css.timeline__year_next}>
            </div>
            </Row>
        </Container>
      </>
    );
  }
}
