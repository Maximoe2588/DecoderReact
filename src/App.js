import React from 'react';
import Caesar from './components/Caesar';
import Polybius from './components/Polybius';
import Substitution from './components/Substitution';

function App() {
  return (
    <div>
      <h1>Decoder Project</h1>
      <Caesar />
      <Polybius />
      <Substitution />
    </div>
  );
}

export default App;

