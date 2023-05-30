import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Caesar from './components/Caesar';
import Polybius from './components/Polybius';
import Substitution from './components/Substitution';

function App() {
  return (
    <Router>
      <div>
        <h1>Decoder Project</h1>
        <p>
          Welcome to the Decoder Project! Decoders are tools used to encrypt and decrypt messages using different
          ciphers. Select a cipher below to encode or decode your message:
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/caesar">Caesar Cipher</Link>
            </li>
            <li>
              <Link to="/polybius">Polybius Cipher</Link>
            </li>
            <li>
              <Link to="/substitution">Substitution Cipher</Link>
            </li>
          </ul>
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
