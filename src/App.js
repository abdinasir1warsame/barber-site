import Hero from './components/hero/hero';
import NavBar from './components/navBar/navBar';
import Employee from './components/barber-employees/employee';
import Intro from './components/intro/intro';
import Bookings from './components/bookings/bookings';
import PricingAndStylesPage from './components/pricingAndStyles/pricingAndStyles';
import Products from './components/products/products';
import Faq from './components/faqs/faq';

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
      <Bookings />
    </div>
  );
}

export default App;
