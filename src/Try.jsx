import React, { Component } from "react";
import Slider from "react-slick";
import { images } from "./frontpagedata";

export default class Try extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      autoplay:true,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {images.map((im)=>(
            <div style={{minHeight:"70vh"}}>
              <img style={{width:"100%"}} src={im.image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}