import React, { Component } from 'react';
import TimeSpan from './TimeSpan/TimeSpan';
import { div, Row, Container } from 'react-bootstrap';
import css from './TimeLine.module.css'

export default class Timeline extends Component {
  constructor(props) {
    super(props)
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handlePrevClick = this.handlePrevClick.bind(this)
    this.renderTimeline = this.renderTimeline.bind(this)
    this.state = { year: 1930 }
  }
  handleNextClick() {
    this.state.year >= 2000 ? this.setState({ year: 1900 }) : this.setState({ year: this.state.year + 10 })
  }
  handlePrevClick() {
    this.state.year <= 1900 ? this.setState({ year: 2000 }) : this.setState({ year: this.state.year - 10 })
  }
  renderTimeline() {
    let sm = '<div className={css.timeline__year}>'
    let render = '' + sm
    for (let i = 1900; i <= 2000; i += 10) {
      render += sm * 3
    }
    return render;
  }
  render() {
    const year = this.state.year
    let sm = <div className={`${css.timeline__year} ${css.sm}`}></div>;
    let yl = <div className={`${css.timeline__year}`}></div>;

    let timeLine = [...Object.keys(this.props.timeline.years)].map((y, i, arr) =>
      <><div className={parseInt(y) === year ? `${css.timeline__year} ${css.active}` : `${css.timeline__year}`}>{y}</div>
        {arr.length - 1 !== i && sm}
        {arr.length - 1 !== i && yl}
        {arr.length - 1 !== i && sm}
        {arr.length - 1 !== i && yl}
        {arr.length - 1 !== i && sm}
      </>)
    return (
      <>
        <TimeSpan years={this.props.timeline.years[year]} />
        <Container className="align-bottom">
          <Row className="w-100 justify-content-between mx-auto align-bottom">
            <div className={css.timeline__year_prev} onClick={this.handlePrevClick}>
            </div>
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            {timeLine}
            <div className={`${css.timeline__year} ${css.sm}`}>
            </div>
            <div className={css.timeline__year_next} onClick={this.handleNextClick}>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
