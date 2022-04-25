import React from 'react';
import useProducts from '../../Hooks/useProducts';

const OderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>{products.length}</h1>
            <h1>Review</h1>
        </div>
    );
};

export default OderReview;