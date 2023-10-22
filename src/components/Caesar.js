import React, { useState } from 'react';
import { caesar } from '../modules/caesarModule';

function Caesar() {
  const [input, setInput] = useState('');
  const [shift, setShift] = useState(0);
  const [encode, setEncode] = useState(true);
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    updateOutput(e.target.value, shift, encode);
  };

  const handleShiftChange = (e) => {
    setShift(parseInt(e.target.value));
    updateOutput(input, parseInt(e.target.value), encode);
  };

  const handleEncodeChange = (e) => {
    setEncode(e.target.checked);
    updateOutput(input, shift, e.target.checked);
  };

  const updateOutput = (input, shift, encode) => {

    if (shift === 0) {
      return input;
    }

    if (!shift || shift < -25 || shift > 25) {
      setOutput('Invalid shift value');
      return;
    }

    const updatedOutput = caesar(input, shift, encode);
    setOutput(updatedOutput);
  };

  return (
    <div className="caesar-container">
      <h2>Caesar Cipher</h2>
      <p>
        The Caesar cipher is a substitution cipher where each letter in the plaintext is shifted a certain number of
        positions down or up the alphabet. It is named after Julius Caesar, who is said to have used this encryption
        method to communicate with his officials.
      </p>
      <div className="input-group">
      <label htmlFor="caesar-input">Input:</label>
      <input id="caesar-input" type="text" value={input} onChange={handleInputChange} />
      </div>
      <div className="input-group">
      <label htmlFor="caesar-shift">Shift:</label>
      <input id="caesar-shift" type="number" value={shift} onChange={handleShiftChange} />
      </div>
      <div className="input-group">
      <label htmlFor="caesar-encode">Encode:</label>
      <input id="caesar-encode" type="checkbox" checked={encode} onChange={handleEncodeChange} />
      </div>
      <div>Output: {output}</div>
      <p>
        Example: If the input is "HELLO" and the shift is 3, the encoded output will be "KHOOR".
        Decoding the output "KHOOR" with a shift of 3 will give you the original input "HELLO" back.
      </p>
    </div>
  );
}

export default Caesar;
