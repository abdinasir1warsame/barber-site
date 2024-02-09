import React, { useState, useEffect } from 'react';
import './pricingAndStyles.css';
import PricingMenu from './pricing';
import CarouselComponent from './styles';

const PricingAndStylesPage = () => {
  return (
    <div className="pricing-and-styles">
      <PricingMenu></PricingMenu>
      <CarouselComponent></CarouselComponent>
    </div>
  );
};

export default PricingAndStylesPage;
