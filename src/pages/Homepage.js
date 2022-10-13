import React from 'react';
import Toolbar from '../components/Toolbar.js';


function Homepage() {
  return (
    <main>
      <div className='grid grid-cols-12'>
        <Toolbar />
        <div className='col-span-10 main-content'>
          <h2>Homepage</h2>
          <p>Here's the stuff for the homepage.</p>
        </div>
      </div>
    </main>
  )
};

export default Homepage;
