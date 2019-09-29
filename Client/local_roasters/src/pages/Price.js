import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Price = props => {
  let [price, setPrice] = useState('');
  let signin = '';
  let isPicked = false;
  const onChange = e => {
    //setPrice(e.target.value);
    isPicked = true;
    let node = document.getElementsByClassName('btn-group-items');

    for (let i = 0; i < node.length; i++) {
      node[i].className = 'btn btn-lg btn-primary btn-group-items';
    }

    e.target.className = 'btn btn-lg btn-success btn-group-items';

    sessionStorage.setItem(e.target.name, e.target.value);
    setPrice(e.target.value);
  };

  const onClickLink = e => {
    if (price === '') {
      alert('Pick a Price !!');
    } else {
      props.history.push('/signup');
    }
  };

  return (
    <div className='container-fluid'>
      <div className='jumbotron'>
        <h3>
          <i className='fas fa-mug-hot'></i> Local Rosters
        </h3>
        <hr className='my-3'></hr>
        <p>Let's maximize your caffeine.</p>
      </div>
      How much are you willing to pay for your caffeine fix?
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
      <br />
      <div className='btn btn-success' onClick={onClickLink}>
        Continue
      </div>
      <br />
      <div>
        <Link className='links' to='/login'>
          <span className='links-small'>Already Sign Up? |</span> Log In
        </Link>
      </div>
    </div>
  );
};
export default Price;
