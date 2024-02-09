import Hero from './components/hero/hero';
import NavBar from './components/navBar/navBar';
import Employee from './components/barber-employees/employee';
import Intro from './components/intro/intro';
import PricingAndStylesPage from './components/pricingAndStyles/pricingAndStyles';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Intro />
      <Employee />
      <PricingAndStylesPage />
    </div>
  );
}

export default App;
