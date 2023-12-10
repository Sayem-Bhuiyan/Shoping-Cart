const addProduct = () => {
    // getting the input field
    const productField = document.getElementById('product-name');
    const quantityFiled = document.getElementById('product-quantity');

    // get the input text
    const product = productField.value;
    const quantity = quantityFiled.value;

    // clearing the input filed;
    productField.value = '';
    quantityFiled.value = '';

    displayProduct(product, quantity);
    savedProductToLocalStorage(product, quantity)
};

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    
    ul.appendChild(li);
};

const getStoredProduct = () => {
    let cart = {};
    const savedCart = localStorage.getItem('cart');
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const savedProductToLocalStorage = (product, quantity) => {
    const cart = getStoredProduct();
    cart[product] = quantity;

    cartStringify = JSON.stringify(cart);
    console.log(cartStringify)

    localStorage.setItem('cart', cartStringify)
}


const displayProductFromLocalStorage = () => {
    const savedCart = getStoredProduct()
    for(const product in savedCart){
        const quantity = savedCart[product];
        displayProduct(product, quantity);
    }
}
displayProductFromLocalStorage()