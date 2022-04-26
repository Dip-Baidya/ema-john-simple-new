import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';

const OderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h1>{products.length}</h1>
            <h2>{cart.length}</h2>
            <h1>Review</h1>
        </div>
    );
};

export default OderReview;