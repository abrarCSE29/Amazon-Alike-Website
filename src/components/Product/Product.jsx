import React from 'react'
import './Product.css'
import { FaCartPlus } from "react-icons/fa6";
export default function Product(props) {
    console.log(props.product);
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="productPicture" />
            </div>
            
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>by : {seller}</p>
                <h4>Price : ${price}</h4>
                <p>Stock : Only {stock} items left</p>
                <button className='btn-add-to-cart'> <FaCartPlus/>  Add to cart</button>

            </div>


        </div>
    )
}
