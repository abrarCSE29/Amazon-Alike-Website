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
    if(existingCart.find(pd => pd.key === product.key)){
        const index = existingCart.findIndex(pd => pd.key === product.key);
        existingCart[index].quantity = existingCart[index].quantity + 1;
        console.log(existingCart[index].quantity);
    }
    else{
        product['quantity']=1;
        console.log(product.quantity);
        existingCart.push(product);
    }
    
    localStorage.setItem("cart", JSON.stringify(existingCart));
    console.log("Cart products" , existingCart);
}

const removeFromCartdb = (product) =>{
    const existingCart = getCartdb();
    const index = existingCart.indexOf(product);
    existingCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(existingCart));
}

const removeCart = () => {
    localStorage.removeItem("cart");
}

const addUser = (user) => {
    console.log(user);
    const userList =localStorage.getItem("userList")? JSON.parse(localStorage.getItem("userList")) : [];
    console.log("this is user list ",userList);
    userList.push(user);
    localStorage.setItem("userList", JSON.stringify(userList));
}

export {setProducts,getProducts,getCartdb,setCartdb,removeFromCartdb,removeCart,addUser};
