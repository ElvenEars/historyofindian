import React, { Component } from 'react';
import Slider from './Slider/Slider';
import { Carousel } from 'react-bootstrap';

export default class TimeSpan extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.slidesElements =
      this.props.years.slides.map(s => <Carousel.Item><Slider image={s.image} title={s.title} comment={s.comment} text={s.text} /></Carousel.Item>)
  }
  render() {
    return (
      <>
        <Carousel indicators={false}>
            {this.slidesElements}
        </Carousel>
      </>
    );
  }
}
