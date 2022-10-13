import React from 'react';


function SearchForm({ searchState, setSearchState, resultsData, setResultsData }) {

  const changeHandler = e => {
    if (e.target.id === 'creatureName') {
      setSearchState(e.target.value);
    };
  };

  const submitHandler = e => {
    e.preventDefault();
    const query = searchState;
    const fetchUrl = `https://api.open5e.com/monsters/?name=${query}`

    fetch(fetchUrl)
      .then(res => res.json())
      .then(data => {
        data = data.results[0]
        if (data) {
          setResultsData(data);
          console.log(data);
        };
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="w-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onChange={changeHandler} onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Creature Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="creatureName" type="text" placeholder="Creature Name" />
          </div>
          {/* <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div> */}
          <div className="flex items-center justify-between w-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button" onClick={submitHandler}>
              Search
            </button>
            {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a> */}
          </div>
        </form>
      </div>
      {/* Spot to render the current search */}
      {
        resultsData ? 'Data goes here' : 'No data to put here'
      }
      <div>

      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Ben Martin.
      </p>
    </div>
  );
};

export default SearchForm;
