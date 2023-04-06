
import './App.css';
// This enables routing in our REACT APP
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// EXPLANATION: This should hold everything in our app that requires routing. That is, if we need routing throughout our app, we must wrap our higher component in BrowserRouter.

function App() {
  return (
    <div className="App">
     <Router> 
       <Routes>
        <route path="/" element={<About />} />
        <route path="/" element={<Portfolio />} />
        <route path="/" element={<Contact />} />
        <route path="/" element={<Resume />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
