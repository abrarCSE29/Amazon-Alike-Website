import React from 'react'
import './Product.css'
export default function Product(props) {
    console.log(props.product);
    const {img,name} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="productPicture" />
            </div>
            
            <div>
                <h3>{name}</h3>
                <p>by : {props.product.seller}</p>

            </div>


        </div>
    )
}
