import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <About />
      <Portfolio/>
      <Services/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
