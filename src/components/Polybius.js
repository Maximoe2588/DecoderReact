import React, { useState } from 'react';
import { polybius } from '../modules/polybiusModule';

function Polybius() {
  const [input, setInput] = useState('');
  const [encode, setEncode] = useState(true);
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEncodeChange = (e) => {
    setEncode(e.target.checked);
  };

  const handlePolybius = () => {
    const encoded = polybius(input, encode);
    setOutput(encoded);
  };

  return (
    <div>
      <h2>Polybius Cipher</h2>
      <label htmlFor="polybius-input">Input:</label>
      <input id="polybius-input" type="text" value={input} onChange={handleInputChange} />
      <label htmlFor="polybius-encode">Encode:</label>
      <input id="polybius-encode" type="checkbox" checked={encode} onChange={handleEncodeChange} />
      <button onClick={handlePolybius}>Encode/Decode</button>
      <div>Output: {output}</div>
    </div>
  );
}

export default Polybius;
