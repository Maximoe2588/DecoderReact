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
      <p>
        The Polybius cipher uses a 5x5 grid to map each letter of the alphabet to a pair of coordinates. It is often
        used with a square grid, where the letters 'I' and 'J' are combined into a single cell. This cipher can be used
        for both encoding and decoding messages.
      </p>
      <label htmlFor="polybius-input">Input:</label>
      <input id="polybius-input" type="text" value={input} onChange={handleInputChange} />
      <label htmlFor="polybius-encode">Encode:</label>
      <input id="polybius-encode" type="checkbox" checked={encode} onChange={handleEncodeChange} />
      <button onClick={handlePolybius}>Encode/Decode</button>
      <div>Output: {output}</div>
      <p>
        Example: If the input is "HELLO", the encoded output might be "32441544". Decoding the output "32441544"
        will give you the original input "HELLO" back.
      </p>
    </div>
  );
}

export default Polybius;
