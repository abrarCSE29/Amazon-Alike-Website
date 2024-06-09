import React, { useState } from 'react'
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
export default function Shop() {

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const handleAddProduct = (pd) => {
        console.log(pd);
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
                <h3>This is cart container</h3>
            </div>


        </div>


    )
}
