import React from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions'
import '../styles/SearchResult.css';
import PropTypes from 'prop-types';


import Products from '../components/Products';
import SearchBox from '../components/SearchBox'

class SearchResult extends Reflux.Component {
  constructor(props){
    super(props);
    this.state = {
      search : this.props.match.params.q
    };
    this.store = AppStore;
    this.storeKey = ['data','categories'];
  }

  componentDidMount(){
    Actions.findProducts(this.state.search);
  }

  componentWillReceiveProps(nextProps, nextContext){
    Actions.findProducts(nextProps.match.params.q);
  } 

  render() {

    let prod = this.state.data.map((cv, index,array) => {
        return   <Products 
              key={index} 
              id={cv.id} 
              title={cv.title} 
              price={cv.price} 
              thumbnail={cv.thumbnail} 
              city_name={cv.address.city_name}
            />
      });

   //let names = this.state.categories.map( (cv, index,array) => `${cv.name} >`).join(' ');
     console.log(this.state.categories);  
    return (
        <div key={this.state.search}  className="container pb-5 mb-2">
        <div className="categorias-relacionadas">
        Categoria1 > Categoria2 > Categoria3 
        </div>
        {prod}
        </div>

    );
 
}

}

SearchResult.protoType = {
  match: PropTypes.any
}

export default SearchResult;
