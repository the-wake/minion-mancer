import React from 'react';
import SearchForm from './SearchForm'


function Toolbar({ searchState, setSearchState, resultsData, setResultsData }) {
  return (
    <aside className='col-span-2 bg-gray-50 main-content flex justify-center'>
      <SearchForm searchState={searchState} setSearchState={setSearchState} resultsData={resultsData} setResultsData={setResultsData} />
    </aside>
  );
};

export default Toolbar;
