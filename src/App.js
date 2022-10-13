import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header.js';
import Homepage from './pages/Homepage.js';

function App() {

  // This framework is to allow for autocomplete of the search form based on the external API call, but it's hit some issues and I'm pausing on it for now.
  // const [loaded, setLoaded] = useState(false);
  // const [creatureNames, setCreatureNames] = useState([]);

  // const getCreatureList = () => {
  //   const reqUrl = 'https://api.open5e.com/monsters';

  //   fetch(reqUrl)
  //     .then(res => res.json())
  //     .then(data => {
  //       data.results.map((creature) => {
  //         const addCreature = creature.name;
  //         setCreatureNames(creatureNames => [...creatureNames, addCreature]);
  //       });
  //       console.log(creatureNames);
  //     });
  // };

  // if (loaded === false) {
  //   setLoaded(true);
  //   getCreatureList();
  // };


  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
};

export default App;
