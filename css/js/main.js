let cart = [];
let totalPrice = 0;

function addToCart() {
    const product = { name: "نموذج موقع إلكتروني", price: 39.99 };
    cart.push(product);
    totalPrice += product.price;
    updateCart();
    alert("تمت الإضافة إلى السلة!");
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalElement = document.getElementById("total-price");
    cartList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between";
        li.textContent = item.name + " - " + item.price + " $";
        cartList.appendChild(li);
    });

    totalElement.textContent = totalPrice.toFixed(2);
}
