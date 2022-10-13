import React from 'react';
import SearchForm from './SearchForm'


function Toolbar({ searchState, setSearchState, resultsData, setResultsData, setCardsData }) {
  return (
    <aside className='col-span-2 bg-gray-50 main-content flex justify-center'>
      <SearchForm searchState={searchState} setSearchState={setSearchState} resultsData={resultsData} setResultsData={setResultsData} setCardsData={setCardsData} />
    </aside>
  );
};

export default Toolbar;
