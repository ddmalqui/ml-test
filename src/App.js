import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import queryString from 'query-string';


import SearchBox from './components/SearchBox'
import SearchResult from './components/SearchResult'
 import DetailsProduct from './components/DetailsProduct'



class App extends Component {
  render() {
    return (
      <Router>
      <div className="AppBackground">
        <SearchBox />
        <Route path="/items" component={SearchResult} />
        
        <Route exact path="/"/> 
        <Route path="/details-product/:id" component={DetailsProduct} /> 
      </div>
      </Router>
    );
  }
}

export default App;
