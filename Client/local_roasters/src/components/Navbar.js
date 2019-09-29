import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title, icon }) {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <Link to='/'> LocalRoasters</Link>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'></li>
            <li className='nav-item'></li>
          </ul>
          <form className='form-inline my-2 my-lg-0'></form>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Local Roaster',
  icon: ''
};
export default Navbar;
