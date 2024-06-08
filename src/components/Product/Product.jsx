import React from 'react'
import './Product.css'
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

            </div>


        </div>
    )
}
