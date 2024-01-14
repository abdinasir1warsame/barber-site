import Hero from './components/hero/hero';
import NavBar from './components/navBar/navBar';
import Employee from './components/barber-employees/employee';
import Intro from './components/intro/intro';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Intro />
      <Employee />
    </div>
  );
}

export default App;
