import React from 'react';
import Toolbar from '../components/Toolbar.js';

import CardLayout from '../components/CardLayout.js';


function Homepage() {

  return (
    <main>
      <div className='grid grid-cols-12'>
        <Toolbar />
        <div className='col-span-10 main-content'>
          <CardLayout />
        </div>
      </div>
    </main>
  )
};

export default Homepage;
