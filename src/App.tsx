import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Rentals from './components/Rentals';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import GetQuote from './components/GetQuote';
import VehicleDetails from './components/VehicleDetails';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<GetQuote />} />
        <Route path="/vehicle/:id" element={<VehicleDetails />} />
      </Routes>
    </Router>
  );
}

export default App;