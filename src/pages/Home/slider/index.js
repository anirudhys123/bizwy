import React, { useEffect, useContext } from 'react';
import Slider from 'react-slick';
import './index.css';

import Slide1 from '../../../assets/images/slider-1.webp';
import Slide2 from '../../../assets/images/slider-2.webp';
import mobile from '../../../assets/images/elec.jpg';
import fash from '../../../assets/images/fashion.jpg';
import fruit from '../../../assets/images/fruits.jpg';
import Button from '@mui/material/Button';

import Newsletter from '../../../components/newsletter';

import { MyContext } from '../../../App';

const HomeSlider = () => {
  const context = useContext(MyContext);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: context.windowWidth > 992 ? true : false,
    autoplay: true
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src={Slide1} className="w-n" />
            <div className="info">
              <h2 className="mb-4">
                Don’t miss amazing
                <br />
                grocery deals
              </h2>
             
            </div>
          </div>
          <div className="item">
            <img src={Slide2} className="item w-n" />
          
          </div>
          <div className="item">
            <img src={fash} className="w-n" />
            <div className="info">
              <h2 className="mb-3">
                Latest Fashion
                <br />
                upto 60% off
              </h2>
              <p>Grab Now!</p>
            </div>
          </div>
          <div className="item">
            <img src={mobile} className="w-n" />
            <div className="info">
              <h2 className="mb-3">
                Laptops
                <br />
                At great discounts
              </h2>
              <p>Get them today, before it ends!</p>
            </div>
          </div>
          <div className="item">
            <img src={fruit} className="w-n" />
            <div className="info">
              <h2 className="mb-3">
                Fresh and Exotic Fruits
                <br />
                great offers
              </h2>
              <p>Get them delivered at your doorsteps!</p>
            </div>
          </div>
        </Slider>

        {context.windowWidth > 992 && <Newsletter />}
      </div>
    </section>
  );
};

export default HomeSlider;
