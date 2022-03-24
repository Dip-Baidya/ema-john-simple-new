import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css'

const Product = (props) => {
    // console.log(props)
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    const { name, img, price, stock, seller } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""></img>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price:{price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">{cartIcon}Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;