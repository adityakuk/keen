
import './App.css';
import About from './components/About';
import Service from './components/Service';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Price from './components/Price';



function App() {
  return (
  <div>
  <Navbar /> 
  <About />
  <Service />
  <Portfolio />
  <Price />
  <Team />
  <Contact />

  </div>
  );
}

export default App;
