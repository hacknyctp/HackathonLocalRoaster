import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Splash = () => {
  const [coffee, setCoffeeType] = useState('');
  const onChange = e => {
    //setCoffeeType(e.target.value);
    sessionStorage.setItem(e.target.name, e.target.value);
    alert('on change');
  };
  return (
    <div className='container-fluid'>
      <div className='jumbotron'>
        <h3>Local Rosters</h3>
        <p>We care about your coffee and maximum price...</p>
      </div>
      What's your type of coffee ? <br />
      <div
        class='btn-group-vertical'
        role='group'
        aria-label='Basic example'
        name='coffee'
        value='light'
      >
        <button
          type='button'
          class='btn btn-primary'
          type='button'
          onClick={onChange}
        >
          Light
        </button>
        <br />
        <button type='button' class='btn btn-primary'>
          Medium
        </button>
        <br />
        <button type='button' class='btn btn-primary'>
          Strong
        </button>
      </div>
      {/* <div className='btn btn-secondary'>
          <input
            className='form-check-input'
            type='button'
            name='coffee'
            value='strong'
            onChange={onChange}
          />
          <label className='form-check-label' for='exampleRadios1'>
            Strong
          </label> 

  </div>*/}
      <div>
        <Link to='/price'>Continue</Link>
      </div>
    </div>
  );
};
export default Splash;
