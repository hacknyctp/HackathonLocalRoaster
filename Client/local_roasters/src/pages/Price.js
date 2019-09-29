import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Price = () => {
    const [price, setPrice] = useState('');
    const onChange = e => {
        //setPrice(e.target.value);
        sessionStorage.setItem(e.target.name, e.target.value);
    };
    return (
        <div className='container-fluid'>
            <div className='jumbotron'>
                <h3>Local Rosters</h3>
                <p>We care about your coffee and maximum price...</p>
            </div>
            What is the most you'll pay for a cup of coffee ..?
      <br />
            <div className='btn-group btn-group-price' role='group'>
                <div className='btn-group-item'>
                    <input
                        className='btn btn-lg btn-primary'
                        type='button'
                        name='price'
                        value='1'
                        onClick={onChange}
                    />
                </div>
                <div className='btn-group-item'>
                    <input
                        className='btn btn-lg btn-primary'
                        type='button'
                        name='price'
                        value='2'
                        onClick={onChange}
                    />
                </div>
                <div className='btn-group-item'>
                    <input
                        className='btn btn-lg btn-primary'
                        type='button'
                        name='price'
                        value='3'
                        onClick={onChange}
                    />
                </div>
            </div>
            <br />
            <div className='btn-group btn-group-price' role='group'>
                <div className='btn-group-item'>
                    <input
                        className='btn btn-lg btn-primary'
                        type='button'
                        name='price'
                        value='4'
                        onClick={onChange}
                    />
                </div>
                <div className='btn-group-item'>
                    <input
                        className='btn btn-lg btn-primary'
                        type='button'
                        name='price'
                        value='5'
                        onClick={onChange}
                    />
                </div>
                <div className='btn-group-item'>
                    <input
                        className='btn btn-lg btn-primary'
                        type='button'
                        name='price'
                        value='6'
                        onClick={onChange}
                    />
                </div>
            </div>
        </div>
    );
};
export default Price;
