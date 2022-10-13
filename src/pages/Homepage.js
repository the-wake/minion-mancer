import React, { useState } from 'react';
import Toolbar from '../components/Toolbar.js';

import CardLayout from '../components/CardLayout.js';


function Homepage() {

  const [searchState, setSearchState] = useState('');
  const [resultsData, setResultsData] = useState('');
  const [cardsData, setCardsData] = useState([]);

  return (
    <main>
      <div className='grid grid-cols-10'>
        <Toolbar searchState={searchState} setSearchState={setSearchState} resultsData={resultsData} setResultsData={setResultsData} setCardData={setCardsData}/>
        <div className='col-span-8 main-content'>
          <CardLayout cardsData={cardsData} setCardsData={setCardsData}/>
        </div>
      </div>
    </main>
  )
};

export default Homepage;
