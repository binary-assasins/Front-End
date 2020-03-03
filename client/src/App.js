import React from 'react';
import './App.css';
import {BrowserRouter as Router, Router, Route} from "react-router-dom";
import Home from './components/home.js';
import Login from "./components/login.js";
import Register from "./components/register.js"; 

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}  />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
