import React, { useEffect, useState } from 'react'
import "./CartReview.css"
import { getCartdb, removeFromCartdb } from '../../Database/database';
import { Link } from 'react-router-dom';
export default function CartReview() {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCartdb);
    }, []);

    const handleRemoveFromCart = (product) => {
        removeFromCartdb(product);
        setCart(getCartdb);
    }

    const name = 'Abrar Hameem';




    // const totalPrice = cart.reduce((total, prd) => total + prd.price*prd.quantity, 0);

    let totalPrice = 0;

    for (let x in cart) {
        totalPrice += cart[x].price * cart[x].quantity;
    };
    //console.log("total price",totalPrice);

    let shippingCost = 0;
    if (totalPrice > 60) {
        shippingCost = 20;
    }
    else if (totalPrice > 40) {
        shippingCost = 5;
    }
    else if (totalPrice > 0) {
        shippingCost = 3;
    }


    const vat = (totalPrice * 15.00 / 100).toFixed(2);


    const grandTotal = (totalPrice + Number.parseFloat(vat) + shippingCost).toFixed(2);
    return (
        <div className='cart'>
            <div className='cart-heading'>
                <h2>This is review cart</h2>
                <p className='text-bold'>Items Ordered : {cart.length}</p>
            </div>
            <ol>
                {
                    cart.map((product, index) =>
                        <div key={index}>
                            <li key={index}>
                                <div className='cart-product'>
                                    <div className='name'>
                                        {product.name}
                                    </div>
                                    <div className='name'>
                                        <strong>Quantity : {product.quantity}</strong>
                                    </div>
                                    <div className='price'>
                                        ${product.price * product.quantity}
                                    </div>
                                </div>
                            </li>
                            <button className='del-button' onClick={handleRemoveFromCart}>Delete</button>
                        </div>
                    )
                }
            </ol>

            {cart.length > 0 && (
                <>
                    <hr />
                    <div className='cart-product'>
                        <div className='name'>Shipping Cost</div>
                        <div className='price'>${shippingCost.toFixed(2)}</div>
                    </div>
                    <div className='cart-product'>
                        <div className='name'>VAT & Tax</div>
                        <div className='price'>${vat}</div>
                    </div>
                    <hr className='hr-line' />
                    <div className='cart-product text-bold'>
                        <div className='name'>Grand Total</div>
                        <div className='price'>${grandTotal}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link to={`/orderconfirm/${name}`}><button style={{ textAlign: 'center' }} className='btn-placeorder'>Place Order</button></Link>
                    </div>

                </>
            )}


        </div>
    )
}
