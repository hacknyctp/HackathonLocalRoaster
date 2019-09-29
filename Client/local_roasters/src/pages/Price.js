import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Price = () => {
  const [price, setPrice] = useState('');
  const onChange = e => {
    //setPrice(e.target.value);
    let node = document.getElementsByClassName('btn-group-items');

    for (let i = 0; i < node.length; i++) {
      node[i].className = 'btn btn-lg btn-primary btn-group-items';
    }

    e.target.className = 'btn btn-lg btn-success btn-group-items';

    sessionStorage.setItem(e.target.name, e.target.value);
  };
  return (
    <div className='container-fluid'>
      <div className='jumbotron'>
        <h3>
          <i className='fas fa-mug-hot'></i> Local Rosters
        </h3>
        <hr class='my-3'></hr>
        <p>We care about your coffee and maximum price...</p>
      </div>
      What is the most you'll pay for a cup of coffee ..?
      <br />
      <div className='btn-group btn-group-price' role='group'>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary btn-group-items'
            type='button'
            name='price'
            value='$1'
            onClick={onChange}
          />
        </div>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary btn-group-items'
            type='button'
            name='price'
            value='$2'
            onClick={onChange}
          />
        </div>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary btn-group-items'
            type='button'
            name='price'
            value='$3'
            onClick={onChange}
          />
        </div>
      </div>
      <br />
      <div className='btn-group btn-group-price' role='group'>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary btn-group-items'
            type='button'
            name='price'
            value='$4'
            onClick={onChange}
          />
        </div>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary btn-group-items'
            type='button'
            name='price'
            value='$5'
            onClick={onChange}
          />
        </div>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary btn-group-items'
            type='button'
            name='price'
            value='$6'
            onClick={onChange}
          />
        </div>
      </div>
      <div>
        <Link to='/signup'>Continue</Link>
      </div>
    </div>
  );
};
export default Price;
