import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const id in savedCart) {
                // console.log(id, savedCart[id]);//Print Quantity

                const addedProduct = products.find(product => product.id === id);
                if (addedProduct) {
                    const quantity = savedCart[id];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct) // show quantity attribute
                    storedCart.push(addedProduct);
                }
                // console.log(id, addedProduct)

            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(product);

        //Add Product in Local Storage
        addToDb(product.id);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.key}
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;