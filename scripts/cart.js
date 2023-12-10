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

    console.log(product, quantity);
    displayProduct(product, quantity)
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    
    ul.appendChild(li)
}