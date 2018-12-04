import React, { Component } from "react";
import Yos from "../chicago-banner.jpg";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1
    };
    return (
          <div className="carousel">
            <input className="carousel-locator" id="slide-1" type="radio" name="carousel-radio" hidden={true} defaultChecked={true}></input>
            <input className="carousel-locator" id="slide-2" type="radio" name="carousel-radio" hidden={true}></input>
            <input className="carousel-locator" id="slide-3" type="radio" name="carousel-radio" hidden={true}></input>
            <input className="carousel-locator" id="slide-4" type="radio" name="carousel-radio" hidden={true}></input>

            <div className="carousel-container">
              <figure className="carousel-item">
                <label className="item-prev btn btn-action btn-lg" htmlFor="slide-4"><i className="icon icon-arrow-left"></i></label>
                <label className="item-next btn btn-action btn-lg" htmlFor="slide-2"><i className="icon icon-arrow-right"></i></label>
                <img className="img-responsive rounded" src={Yos} style={{height:"100%", width:"100%"}} alt="macOS Yosemite Wallpaper"/>
              </figure>
              <figure className="carousel-item">
                <label className="item-prev btn btn-action btn-lg" htmlFor="slide-1"><i className="icon icon-arrow-left"></i></label>
                <label className="item-next btn btn-action btn-lg" htmlFor="slide-3"><i className="icon icon-arrow-right"></i></label>
                <img className="img-responsive rounded" src={Yos} style={{height:"100%", width:"100%"}} alt="macOS Yosemite Wallpaper" />
              </figure>
              <figure className="carousel-item">
                <label className="item-prev btn btn-action btn-lg" htmlFor="slide-2"><i className="icon icon-arrow-left"></i></label>
                <label className="item-next btn btn-action btn-lg" htmlFor="slide-4"><i className="icon icon-arrow-right"></i></label>
                <img className="img-responsive rounded" src={Yos} style={{height:"100%", width:"100%"}} alt="macOS Yosemite Wallpaper" />
              </figure>
              <figure className="carousel-item">
                <label className="item-prev btn btn-action btn-lg" htmlFor="slide-3"><i className="icon icon-arrow-left"></i></label>
                <label className="item-next btn btn-action btn-lg" htmlFor="slide-1"><i className="icon icon-arrow-right"></i></label>
                <img className="img-responsive rounded" src={Yos} style={{height:"100%", width:"100%"}} alt="macOS Yosemite Wallpaper" />
              </figure>
            </div>
            <div className="carousel-nav">
              <label className="nav-item text-hide c-hand" htmlFor="slide-1">1</label>
              <label className="nav-item text-hide c-hand" htmlFor="slide-2">2</label>
              <label className="nav-item text-hide c-hand" htmlFor="slide-3">3</label>
              <label className="nav-item text-hide c-hand" htmlFor="slide-4">4</label>
            </div>
          </div>
    );
  }
}