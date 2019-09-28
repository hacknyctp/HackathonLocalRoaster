import React from 'react';
import SignUp from './pages/SignUp';
import Price from './pages/Price';
import Splash from './pages/Splash';
import DashBoard from './pages/DashBoard';
import './App.css';
import Signup from './pages/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Splash} />
        <Route exact path='/price' component={Price} />
        <Route exact path='/signup' component={Signup} />
      </div>
    </Router>
  );
}

export default App;