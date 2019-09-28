import React from 'react';
import logo from './logo.svg';
import SignUp from "./pages/SignUp"
import './App.css';
import Signup from './pages/SignUp';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SignUp} />
        {/* <Route exact path="/price" component={Price} /> */}
        {/* <Route exact path="/signup" component={Signup} /> */}
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      </div>
    </Router>
  );
}

export default App;
