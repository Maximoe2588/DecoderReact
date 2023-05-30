import React, { useState } from 'react';
import { caesar } from '../modules/caesarModule';

function Caesar() {
  const [input, setInput] = useState('');
  const [shift, setShift] = useState(0);
  const [encode, setEncode] = useState(true);
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleShiftChange = (e) => {
    setShift(parseInt(e.target.value));
  };

  const handleEncodeChange = (e) => {
    setEncode(e.target.checked);
  };

  const handleCaesar = () => {
    if (!shift || shift < -25 || shift > 25) {
      setOutput('Invalid shift value');
      return;
    }

    const encoded = caesar(input, shift, encode);
    setOutput(encoded);
  };

  return (
    <div>
      <h2>Caesar Cipher</h2>
      <label htmlFor="caesar-input">Input:</label>
      <input id="caesar-input" type="text" value={input} onChange={handleInputChange} />
      <label htmlFor="caesar-shift">Shift:</label>
      <input id="caesar-shift" type="number" value={shift} onChange={handleShiftChange} />
      <label htmlFor="caesar-encode">Encode:</label>
      <input id="caesar-encode" type="checkbox" checked={encode} onChange={handleEncodeChange} />
      <button onClick={handleCaesar}>Encode/Decode</button>
      <div>Output: {output}</div>
    </div>
  );
}

export default Caesar;
