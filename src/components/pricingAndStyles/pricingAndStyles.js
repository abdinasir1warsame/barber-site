import React, { useState, useEffect } from 'react';
import './pricingAndStyles.css';
import PricingMenu from './pricing';
import CarouselComponent from './styles';

const PricingAndStylesPage = () => {
  return (
    <div>
      <div className="col-sm-12">
        <div className="title-box2 ">
          <h3 className="title-a">Explore Our Signature Cuts and Trends</h3>
          <p className="subtitle-a">
            Unlock Inspiration: Browse Through Our Diverse Collection of
            Haircuts, From Classic to Contemporary, Alongside Transparent
            Pricing, and Find Your Next Look!
          </p>
          <div className="line-mf"></div>
        </div>
      </div>
      <div className="pricing-and-styles">
        <PricingMenu></PricingMenu>
        <CarouselComponent></CarouselComponent>
      </div>
      <div className="section-sep"></div>
    </div>
  );
};

export default PricingAndStylesPage;
