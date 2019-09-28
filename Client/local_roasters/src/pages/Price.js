import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Price = () => {
    const [price, setPrice] = useState('');
    const onChange = e => {
        setPrice(e.target.value);
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
            <form className='form-group'>
                <div className='form-check'>
                    <input
                        class='form-check-input'
                        type='radio'
                        name='price'
                        value='2'
                        onChange={onChange}
                    />
                    <label class='form-check-label' for='exampleRadios1'>
                        2
         </label>
                </div>
                <div className='form-check'>
                    <input
                        class='form-check-input'
                        type='radio'
                        name='price'
                        value='3'
                        onChange={onChange}
                    />
                    <label className='form-check-label' for='exampleRadios1'>
                        3
         </label>
                </div>
                <div className='form-check'>
                    <input
                        class='form-check-input'
                        type='radio'
                        name='price'
                        value='4'
                        onChange={onChange}
                    />
                    <label className='form-check-label' for='exampleRadios1'>
                        > 4
         </label>
                </div>
                <Link to='/SingnUp'>Continue</Link>
            </form>
        </div>
    );
};
export default Price;