import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Caesar from './components/Caesar';
import Polybius from './components/Polybius';
import Substitution from './components/Substitution';

function App() {
  return (
    <Router>
      <div>
      <img src="/images/DecoderHeaderFooter.png" alt="Decoder Project Header" className="header-image" />
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
          <Route path="/caesar" element={<div className="cipher-container"><Caesar /></div>} />
          <Route path="/polybius" element={<div className="cipher-container"><Polybius /></div>} />
          <Route path="/substitution" element={<div className="cipher-container"><Substitution /></div>} />
        </Routes>
        </div>
        <img src="/images/DecoderHeaderFooter.png" alt="Decoder Project Footer" className="footer-image" />
      </div>
    </Router>
  );
}

export default App;
