import React from 'react'
import "./Cart.css"
export default function Cart(props) {
    const totalPrice = props.cart.reduce((total, prd) => total + prd.price, 0);
    let shippingCost = 0;
    if (totalPrice > 35) {
        //shippingCost = 13;
    }
    else if (totalPrice > 15) {
        shippingCost = 5;
    }
    else if (totalPrice > 0) {
        shippingCost = 13;
    }
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Items Ordered : {props.cart.length}</p>
            <ol>
                {
                    props.cart.map((product, index) =>
                        <li key={index}>
                            <div className='cart-product'>
                                <div className='name'>
                                    {product.name}
                                </div>
                                <div className='price'>
                                    {product.price}
                                </div>
                            </div>

                        </li>)
                }
            </ol>

        </div>
    )
}
