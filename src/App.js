
import './App.css';
// This enables routing in our REACT APP
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// EXPLANATION: This should hold everything in our app that requires routing. That is, if we need routing throughout our app, we must wrap our higher component in BrowserRouter.
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function App() {
  return (
    <div className="App">
     <Router> 
       <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
