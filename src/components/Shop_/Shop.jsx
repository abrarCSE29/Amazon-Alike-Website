import React, { useState } from 'react'
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
export default function Shop() {

    const first10 = fakeData.slice(0, 10);
    const [products] = useState(first10);
    const [cart,setCart] = useState([]);
    
    
    const handleAddProduct = (pd) => {
        const newCart = [...cart,pd];
        setCart(newCart);

    };
    

    //console.log(products);
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h3>This is product container</h3>
                <ul>
                    {
                        products.map((product, index) =>
                            <Product
                                product={product}
                                handleAddProduct = {handleAddProduct}
                            />
                        )
                    }
                </ul>
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>


    )
}
