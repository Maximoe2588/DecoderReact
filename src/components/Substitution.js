import React, { useState } from 'react';
import { substitution } from '../modules/substitutionModule';

function Substitution() {
  const [input, setInput] = useState('');
  const [alphabet, setAlphabet] = useState('');
  const [encode, setEncode] = useState(true);
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAlphabetChange = (e) => {
    setAlphabet(e.target.value);
  };

  const handleEncodeChange = (e) => {
    setEncode(e.target.checked);
  };

  const handleSubstitution = () => {
    if (!input || !alphabet || alphabet.length !== 26) {
      setOutput('Invalid input or alphabet');
      return;
    }

    if (Array.from(new Set(alphabet)).length !== 26) {
      setOutput('Alphabet contains duplicate characters');
      return;
    }

    const encoded = substitution(input, alphabet, encode);
    setOutput(encoded);
  };

  return (
    <div>
      <h2>Substitution Cipher</h2>
      <label htmlFor="substitution-input">Input:</label>
      <input id="substitution-input" type="text" value={input} onChange={handleInputChange} />
      <label htmlFor="substitution-alphabet">Alphabet:</label>
      <input
        id="substitution-alphabet"
        type="text"
        value={alphabet}
        onChange={handleAlphabetChange}
      />
      <label htmlFor="substitution-encode">Encode:</label>
      <input id="substitution-encode" type="checkbox" checked={encode} onChange={handleEncodeChange} />
      <button onClick={handleSubstitution}>Encode/Decode</button>
      <div>Output: {output}</div>
    </div>
  );
}

export default Substitution;
