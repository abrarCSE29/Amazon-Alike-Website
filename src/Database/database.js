import fakeData from "../fakeData";

const setProducts = () =>{
    const first10 = fakeData.slice(0, 10);
    localStorage.setItem("products", JSON.stringify(first10));
};

const getProducts = () =>{
    const products = localStorage.getItem("products");
    return JSON.parse(products);
};

const getCart = () =>{
    const cart = localStorage.getItem("cart")?JSON.parse(cart) : [];
    return cart
}



export {setProducts,getProducts,getCart};
