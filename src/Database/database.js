import fakeData from "../fakeData";

const setProducts = () =>{
    const first10 = fakeData.slice(0, 30);
    localStorage.getItem('products')? console.log() :localStorage.setItem("products", JSON.stringify(first10));
    
};

const getProducts = () =>{
    const products = localStorage.getItem("products");
    return JSON.parse(products);
};

const getCartdb = () =>{
    const cartdb = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")) : [];
    //console.log('thsi is cart db' ,cartdb);
    return cartdb;
}

const setCartdb = (product) =>{
    const existingCart = getCartdb();
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    console.log("Cart products" , existingCart);
}

const removeFromCartdb = (product) =>{
    const existingCart = getCartdb();
    const index = existingCart.indexOf(product);
    existingCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(existingCart));
}

export {setProducts,getProducts,getCartdb,setCartdb,removeFromCartdb};
