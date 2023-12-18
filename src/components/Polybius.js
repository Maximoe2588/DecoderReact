import React, { useState } from 'react';
import { polybius } from '../modules/polybiusModule';

function Polybius() {
  const [input, setInput] = useState('');
  const [encode, setEncode] = useState(true);
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    updateOutput(e.target.value, encode);
  };

  const handleEncode = () => {
    updateOutput(input, true);
  };

  const handleDecode = () => {
    updateOutput(input, false);
  };

  const updateOutput = (input, encode) => {
    if (!input) {
      setOutput('');
      return;
    }

    const updatedOutput = polybius(input, encode);
    setOutput(updatedOutput);
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
      <button onClick={handleEncode}>Encode</button>
      <button onClick={handleDecode}>Decode</button>
      <div className="output-container">Output: {output}</div>
      <p className="example-container">
        Example: If the input is "HELLO", the encoded output might be "32441544". Decoding the output "32441544"
        will give you the original input "HELLO" back.
      </p>
    </div>
  );
}

export default Polybius;
