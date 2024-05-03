import React from 'react';
import './index.css';

import Hero from '../components/hero/hero';
import Intro from '../components/intro/intro';
import Employee from '../components/barber-employees/employee';
import PricingAndStylesPage from '../components/pricingAndStyles/pricingAndStyles';
import Products from '../components/products/products';
import Contact from '../components/contact/contact';
import Faq from '../components/faqs/faq';
import Footer from '../components/footer/footer';

const IndexPage = () => {
  return (
    <div className="index-container">
      {' '}
      <Hero />
      <Intro />
      <Employee />
      <PricingAndStylesPage />
      <Products />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
};

export default IndexPage;
