import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Caesar from './components/Caesar';
import Polybius from './components/Polybius';
import Substitution from './components/Substitution';

function App() {
  return (
    <Router>
      <div>
        <h1>Decoder Project!</h1>
        <p>
          Welcome to the Decoder Project! Decoders are tools used to encrypt and decrypt messages using different
          ciphers. Select a cipher below to encode or decode your message:
        </p>
        <nav className="nav-links">
          
              <Link className="link" to="/caesar">Caesar Cipher</Link>
            
              <Link className="link" to="/polybius">Polybius Cipher</Link>
           
              <Link  className="link" to="/substitution">Substitution Cipher</Link>
           
        </nav>
        <Routes>
          <Route path="/caesar" element={<Caesar />} />
          <Route path="/polybius" element={<Polybius />} />
          <Route path="/substitution" element={<Substitution />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
