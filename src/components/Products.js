import React, {Component} from 'react';
import PropTypes from 'prop-types'
import '../styles/Products.css'
import {Link} from 'react-router-dom';


class Products extends Component {
	constructor(props){
		super(props);

    this.state = {
      id: props.id,
      title: props.title,
      price: props.price,
      thumbnail: props.thumbnail,
      city_name: props.city_name
    }	
	}

 formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

  render() {
        return (
       <div className="cart-item d-md-flex justify-content-between">
        <div className="px-3 my-3">
            <Link to={"/details-product/".concat(this.props.id)}>
                <div className="cart-item-product-thumb">
                <img src={this.props.thumbnail} className="thumbnail" alt="Product" />
                </div>
                <div className="cart-item-product-info">
                    <h4 className="Product-Price">$ {this.formatNumber(this.props.price)}</h4>
                    <span className='Product-title'>{this.props.title}</span>
                </div>
            </Link>
        </div>
        <div className="px-3 my-3 text-center">
            <div className="cart-item-label">{this.props.city_name}</div>
        </div>
    </div>
    )
  }
}

Products.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  city_name: PropTypes.string.isRequired
}
export default Products;
