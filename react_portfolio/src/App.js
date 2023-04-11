
import './App.css';
// This enables routing in our REACT APP
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// EXPLANATION: This should hold everything in our app that requires routing. That is, if we need routing throughout our app, we must wrap our higher component in BrowserRouter.
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PorfolioProjectDisplay from './pages/PorfolioProjectDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
     <Router> 
      <Navbar/>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Portfolios/:id" element={<PorfolioProjectDisplay/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
       </Routes>
       <Footer />
     </Router>
    </div>
  );
}

export default App;