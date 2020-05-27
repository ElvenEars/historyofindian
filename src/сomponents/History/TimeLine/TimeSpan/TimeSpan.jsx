import React, { Component } from 'react';
import Slider from './Slider/Slider';
import { Carousel } from 'react-bootstrap';

export default class TimeSpan extends Component {

  render() {
    this.slidesElements =
    this.props.years.slides.map(s => <Carousel.Item className="h-100 "><Slider image={s.image} title={s.title} comment={s.comment} text={s.text} /></Carousel.Item>)
    return (
      <>
        <Carousel indicators={false} interval={20000000} className="h-90 align-content-center" >
          {this.slidesElements}
        </Carousel>
      </>
    );
  }
}
