import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';

const OderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const navigate = useNavigate();

    const handleRemove = id => {
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
        removeFromDb(id);
    }

    const handlePlaceOrder = () => {
        navigate("/placeorder");
        setCart([]);
        clearTheCart();
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        id={product.id}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OderReview;