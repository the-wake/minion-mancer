import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header.js';
import Homepage from './pages/Homepage.js';

function App() {

  const [loaded, setLoaded] = useState(false);
  const [creatureNames, setCreatureNames] = useState([]);

  const getCreatureList = () => {
    const reqUrl = 'https://api.open5e.com/monsters';

    fetch(reqUrl)
      .then(res => res.json())
      .then(data => {
        data.results.map((creature) => {
          const addCreature = creature.name;
          setCreatureNames(creatureNames => [...creatureNames, addCreature]);
        });
        console.log(creatureNames);
      });
  };

  if (loaded === false) {
    setLoaded(true);
    getCreatureList();
  };


  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
};

export default App;
