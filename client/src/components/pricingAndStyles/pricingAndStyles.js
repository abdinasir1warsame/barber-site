import React from 'react';
import './pricingAndStyles.css';
import PricingMenu from './pricing';
import CarouselComponent from './styles';

const PricingAndStylesPage = () => {
  return (
    <div>
      <div className="col-sm-12">
        <div className="title-box5 ">
          <h3 className="title-a"> Signature Cuts and Prices</h3>
          <p className="subtitle-a">
            Browse Through Our Diverse Collection of Haircuts, From Classic to
            Contemporary, Alongside Transparent Pricing, and Find Your Next
            Look!
          </p>
          <div className="line-mf2"></div>
        </div>
      </div>
      <div className="pricing-and-styles">
        <PricingMenu></PricingMenu>
        <CarouselComponent></CarouselComponent>
      </div>
      <div className="section-sep2"></div>
    </div>
  );
};

export default PricingAndStylesPage;
