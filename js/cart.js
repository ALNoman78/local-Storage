console.log('maisa monoara moule');

const addProducts = () => {
    const products = document.getElementById('product-items')
    const quantityProduct = document.getElementById('product-quantity')
    const productValue = products.value
    const productQuantity = quantityProduct.value
    products.value = '';
    quantityProduct.value = '';
    
    console.log(productValue , productQuantity);
    displayProducts(productValue , productQuantity);
    saveLocalStorage(productValue , productQuantity)
}

const displayProducts = (product , quantity) => {
    const ul = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`
    ul.appendChild(li)
}

const getShoppingCart = () => {
    let cart = {}
    const getCart = localStorage.getItem('cart')
    if(getCart){
        cart = JSON.parse(getCart)
    }
    return cart;
}

const saveLocalStorage = (products , quantity) => {
    const cart = getShoppingCart()
    cart[products] = quantity;
    const cartStringifyField = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringifyField)
    // console.log(cartStringifyField);
}

const showProductFormLocalStorage = () => {
    const saveCart = getShoppingCart()
    for(const product in saveCart){
        const quantity = saveCart[product]
        console.log(product , quantity);
        displayProducts(product , quantity)
    }
    console.log(saveCart);
}
showProductFormLocalStorage()