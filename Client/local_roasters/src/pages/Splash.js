import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Splash = () => {
  const [coffee, setCoffeeType] = useState('');
  const onChange = e => {
    sessionStorage.setItem(e.target.name, e.target.value);
  };
  return (
    <div className='container-fluid'>
      <div className='jumbotron'>
        <h3>Local Rosters</h3>
        <p>We care about your coffee and maximum price...</p>
      </div>
      What is your type of food?
      <br />
      <div className='btn-group btn-group-price' role='group'>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary'
            type='button'
            name='coffee'
            value='light'
            onClick={onChange}
          />
        </div>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary'
            type='button'
            name='coffee'
            value='medium'
            onClick={onChange}
          />
        </div>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary'
            type='button'
            name='coffee'
            value='strong'
            onClick={onChange}
          />
        </div>
      </div>
      <br />
      <div>
        <Link to='/price'>Continue</Link>
      </div>
    </div>
  );
};
export default Splash;
