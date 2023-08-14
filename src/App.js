import './App.css';

import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <section className='bg-gradient-to-r from-blue-100 to-cyan-90'>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HeroSection/>} />
          </Routes>
          <Footer/>
        </Router>
    </section>

  );
}

export default App;
