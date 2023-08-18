import './App.css';

import './index.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import Education from './components/Education';
import Biografia from './components/Biografia';
import Contact from './components/Contact';



function App() {
  return (
     <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <Education/>
      <Biografia/>
      <Contact/>
      <Footer/>
     </div>   
  );
}

export default App;
