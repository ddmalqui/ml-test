import React from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions'
import '../styles/DetailsProduct.css';
import PropTypes from 'prop-types';
import Products from '../components/Products';
import SearchBox from '../components/SearchBox'

class DetailsProduct extends Reflux.Component {
  constructor(props){
    super(props);
    super.componentWillMount.call(this);
    this.state = {
      id_product : this.props.match.params.id
    };
    this.store = AppStore;
    this.storeKey = ['dataP','details'];
  }

  componentDidMount(){
    Actions.findProduct(this.state.id_product);
    Actions.findDetails(this.state.id_product);
  }

  render() {

if (this.state.dataP.attributes != null){
    var obj = this.state.dataP.attributes;
    var objatt =  obj[Object.keys(obj)[0]].value_name;
  }
    return (
        <div className="container">
          <div className="row">
               <div className="col-6">
                    <img src={this.state.dataP.thumbnail} />
                </div>
                <div className="col-6">
                    <h5><small>
                      {objatt} ({this.state.dataP.sold_quantity} ventas)</small></h5>
        
                    <h3> {this.state.dataP.title}</h3>    
        
                    <h3>${this.state.dataP.price}</h3> 
                    {this.state.details.plain_text}            
        
                    <div>
                        <button className="btn btn-success">Comprar</button>
                    </div>                                        
                </div>                              
        
                <div className="col-xs-9">
                    {this.state.details.plain_text}
                </div>
                </div>    
            </div>

        // 
        //    
        //

    );
 
}

}

DetailsProduct.protoType = {
  match: PropTypes.any
}

export default DetailsProduct;
