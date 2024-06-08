import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrimiumSection from './components/PrimiumSection';
import Advantages from './components/Advantages';
import Customize from './components/Customize';
import Testimonial from './components/Testimonial';
import FaqSection from './components/FaqSection';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-clash_Regular">
      <Navbar/>
      <Hero/>
      <PrimiumSection/>
      <Advantages/>
      <Customize/>
      <Testimonial/>
      <FaqSection/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
