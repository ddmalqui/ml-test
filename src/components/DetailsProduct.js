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

  formatNumber(num) {
    console.log(num);
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

  componentDidMount(){
    Actions.findProduct(this.state.id_product);
    Actions.findDetails(this.state.id_product);
  }

  render() {

if (this.state.dataP.attributes != null){
    var obj = this.state.dataP.attributes;
    var objatt =  obj[Object.keys(obj)[0]].value_name;
    var price = this.formatNumber(this.state.dataP.price);
  }

  

    return (
<div key={this.state.search}  className="container pb-5 mb-2">
        <div className="categorias-relacionadas">
        Categoria1 > Categoria2 > Categoria3 
        </div>
       <div className="cart-item">
        <div className="row details-cont">
          <div className="col-6">
                <div className="cart-item-product-big">
                <img src={this.state.dataP.thumbnail} className="thumbnail-big" alt="Product" />
                </div>
                </div>
                <div className="col-5">
                  {objatt} - {this.state.dataP.sold_quantity} vendidos
                <div className="cart-item-product-info">
                <h1><strong>{this.state.dataP.title}</strong></h1>
                    <h4 className="Product-Price-det">$ {price} </h4>
                 </div>
                 <div className='btn-comprar'>
                  <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>
                 </div>
                </div>
        </div>
         <div className="details-cont-desc">
        <h4>Descripcion del Producto</h4>
        {this.state.details.plain_text}
        </div>  
    </div>
    </div>

    );
 
}

}

DetailsProduct.protoType = {
  match: PropTypes.any
}

export default DetailsProduct;
