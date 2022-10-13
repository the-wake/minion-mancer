import React from 'react';
import SearchForm from './SearchForm'


function Toolbar() {
  return (
    <aside className='col-span-2 bg-gray-50 main-content flex justify-center'>
      <SearchForm />
    </aside>
  );
};

export default Toolbar;
