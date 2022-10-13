import React, { useState } from 'react';

import './App.css';
import Header from './components/Header.js';
import Homepage from './pages/Homepage.js';

function App() {

  const [creatureNames, setCreatureNames] = useState([]);

  const getCreatureList = () => {
    const reqUrl = 'https://api.open5e.com/monsters';
  }

  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
};

export default App;
