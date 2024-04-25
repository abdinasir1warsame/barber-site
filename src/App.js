import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from './components/hero/hero';
import NavBar from './components/navBar/navBar';
import Employee from './components/barber-employees/employee';
import Intro from './components/intro/intro';

import PricingAndStylesPage from './components/pricingAndStyles/pricingAndStyles';
import Products from './components/products/products';
import Faq from './components/faqs/faq';
import Modal from './components/bookings/modal';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Intro />
      <Employee />
      <PricingAndStylesPage />
      <Products />
      <Faq />
      <Modal />

      <Footer />
    </div>
  );
}

export default App;
