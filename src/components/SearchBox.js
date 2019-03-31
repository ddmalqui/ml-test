import React, { Component } from 'react';
import '../styles/SearchBox.css'
import {Link} from 'react-router-dom';


import SearchResult from '../components/SearchResult'


class SearchBox extends Component {

 constructor(props){
   super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {q: ''};
 }

  handleChange(e) {
    this.setState({q: e.target.value});
  }

   handleSubmit(e) {
     e.preventDefault();
     this.refs.results.findResult(this.state.q);
    }

  render() {
    return (
      <div>
      <div className="nav-bar-ml" role="navigation">
        <div className="nav-bar-box-ml" role="navigation">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <a href="/" className="col-2">
                <img className="navbar-logo" src="Logo_ML.png" alt="Logo"/>
              </a>
              <div className="col-8 form-inline" >
                <input value={this.state.q} onChange={this.handleChange} type="text" className="form-control" placeholder="Nunca dejes de Buscar" />
                 <div className="input-group-append">
                    <Link to={"/search/".concat(this.state.q)}>
                    <button className="search-button"><i className="fa fa-search"></i></button>
                     </Link>
                  </div>
              </div>
            </div>
          </form>
        </div>
      </div>      
     </div>

      );
    }
  }

  export default SearchBox;
