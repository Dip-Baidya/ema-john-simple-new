import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displaySearchProducts, setDisplaySearchProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplaySearchProducts(data);
            })
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
        const exists = cart.find(pd => pd.id === product.id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        console.log(product);

        //Add Product in Local Storage
        addToDb(product.id);
    }

    const handleSearch = event => {
        const searchValue = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));

        setDisplaySearchProducts(matchedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input type="text" onChange={handleSearch} placeholder="Search Product" />
            </div>

            <div className="shop-container">
                <div className="product-container">
                    {
                        displaySearchProducts.map(product => <Product
                            product={product}
                            key={product.key}
                            handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn-regular">Review You Order</button>
                        </Link>
                    </Cart>
                </div>

            </div>
        </>

    );
};

export default Shop;