import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = products => {
    const [cart, setCart] = useState([]);

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
    return [cart, setCart];
}

export default useCart;