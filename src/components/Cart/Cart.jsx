import React from 'react'
import "./Cart.css"
export default function Cart(props) {
    const totalPrice = props.cart.reduce((total, prd) => total + prd.price*prd.quantity, 0);
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

    const vat = (totalPrice * 15.00 / 100).toFixed(2);


    const grandTotal = (totalPrice + Number.parseFloat(vat) + shippingCost).toFixed(2);
    return (
        <div className='cart'>
            <div className='cart-heading'>
                <h2>Order Summary</h2>
                <p className='text-bold'>Items Ordered : {props.cart.length}</p>
            </div>
            <ol>
                {
                    props.cart.map((product, index) =>
                        <div key={index}>
                            <li key={index}>
                                <div className='cart-product'>
                                    <div className='name'>
                                        {product.name}
                                    </div>
                                    <div className='name'>
                                        {product.quantity}
                                    </div>
                                    <div className='price'>
                                        ${product.price}
                                    </div>
                                </div>
                            </li>
                        </div>
                    )
                }
            </ol>

            {props.cart.length > 0 && (
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
                </>
            )}


        </div>
    )
}
