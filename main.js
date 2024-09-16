let cart = [];

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCartTable();
}

function updateCartTable() {
    const cartTableBody = document.querySelector('#cart tbody');
    const totalAmountElement = document.querySelector('#totalAmount');

    cartTableBody.innerHTML = '';

    let totalAmount = 0;

    cart.forEach(item => {
        const totalPrice = item.price * item.quantity;
        totalAmount += totalPrice;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${totalPrice.toFixed(2)}</td>
        `;
        cartTableBody.appendChild(row);
    });

    totalAmountElement.textContent = totalAmount.toFixed(2);
}
