import React, { useContext, useState } from 'react'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { getCartdb, getProducts, setCartdb } from '../../Database/database';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
export default function Shop() {

    const first10 = getProducts();
    const [products] = useState(first10);
    const {user} = useContext(UserContext);
    // const DBcart = getCartdb();
    // console.log(DBcart);
    const [cart, setCart] = useState(getCartdb(user));

    

    const handleAddProduct = (pd) => {
        setCartdb(pd,user);
        setCart(getCartdb);
    };

    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.map((product, index) =>
                            <>
                                <Product
                                    product={product}
                                    handleAddProduct={handleAddProduct}
                                    key={index}
                                />
                            </>

                        )
                    }
                </ul>
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'>
                    <div style={{textAlign: 'center'}}>
                        <button className='btn-placeorder'>Review Order</button>
                    </div>
                    </Link>
                </Cart>
            </div>
        </div>


    )
}
