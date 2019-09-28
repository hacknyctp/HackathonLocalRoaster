import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Splash = () => {
    const [coffee, setCoffeeType] = useState('');
    const onChange = e => {
        setCoffeeType(e.target.value);
        sessionStorage.setItem(e.target.name, e.target.value);
    };
    return (
        <div className='container-fluid'>
            <div className='jumbotron'>
                <h3>Local Rosters</h3>
                <p>We care about your coffee and maximum price...</p>
            </div>
            What's your type of coffee ? <br />
            <form className='form-group'>
                {/* <div className='form-check'>
         <input type='radio' value={coffee} onChange={onChange} /> Light <br />
       </div> */}
                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='radio'
                        name='coffee'
                        value='light'
                        onChange={onChange}
                    />
                    <label className='form-check-label' for='exampleRadios1'>
                        Light
         </label>
                </div>
                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='radio'
                        name='coffee'
                        value='medium'
                        onChange={onChange}
                    />
                    <label className='form-check-label' for='exampleRadios1'>
                        Medium
         </label>
                </div>
                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='radio'
                        name='coffee'
                        value='strong'
                        onChange={onChange}
                    />
                    <label className='form-check-label' for='exampleRadios1'>
                        Strong
         </label>
                </div>
                <Link to='/price'>Continue</Link>
            </form>
        </div>
    );
};
export default Splash;