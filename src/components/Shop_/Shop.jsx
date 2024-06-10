import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

export default function Shop() {
    const first10 = fakeData.slice(0, 10);
    const [products] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (pd) => {
        const newCart = [...cart, pd];
        setCart(newCart);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-8">
                    <ul className='list-group'>
                        {products.map((product, index) => (
                            <li key={index} className='list-group-item'>
                                <Product
                                    product={product}
                                    handleAddProduct={handleAddProduct}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-md-4">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
}
