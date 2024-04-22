// Sample data for art pieces
// Sample art data (you can replace this with your actual data)
// Sample data for art pieces
const artPieces = [
    {
        id: 1,
        name: "Reused Cans",
        price: 10,
        image: "animalart.jpg"
    },
    {
        id: 2,
        name: "Reused Plastic Bottle",
        price: 22,
        image: "bottleart.jpg"
    },
    {
        id: 3,
        name: "Lamp by using plastic Bottle",
        price: 30,
        image: "lampart.png"
    },
    {
        id: 4,
        name: "Reused cardboard",
        price: 25,
        image: "cardboard.jpg"
    },
    {
        id: 5,
        name: "Lantern",
        price: 15,
        image: "lantern.jpg"
    },
    {
        id: 6,
        name: "Diya out of CD",
        price: 18,
        image: "diyas.jpg"
    },
    {
        id: 7,
        name: "Mini Case",
        price: 16,
        image: "caseart.jpg"
    },
    {
        id: 8,
        name: "Reused plastic bottle caps",
        price: 20,
        image: "fishart.jpg"
    }
];

// Function to display art pieces in the gallery
function displayArtPieces() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    artPieces.forEach(piece => {
        const productHTML = `
            <div class="product">
                <img src="${piece.image}" alt="${piece.name}">
                <h2>${piece.name}</h2>
                <p>${piece.price}</p>
                <button onclick="addToCart(${piece.id})">Add to Cart</button>
            </div>
        `;
        gallery.innerHTML += productHTML;
    });
}

// Function to add item to cart
function addToCart(productId) {
    const selectedProduct = artPieces.find(piece => piece.id === productId);
    if (selectedProduct) {
        const cartItems = document.getElementById('cartItems');
        const listItem = document.createElement('li');
        listItem.textContent = `${selectedProduct.name} - $${selectedProduct.price}`;
        cartItems.appendChild(listItem);
    }
}

// Function to place order
function placeOrder() {
    const cartItems = document.getElementById('cartItems');
    if (cartItems.children.length > 0) {
        alert('Order placed successfully!');
        cartItems.innerHTML = ''; // Clear the cart after placing order
    } else {
        alert('Your cart is empty. Please add items to your cart first.');
    }
}

// Display art pieces when the page loads
window.onload = function() {
    displayArtPieces();
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    placeOrderBtn.addEventListener('click', placeOrder);
};
// Function to calculate total price
function calculateTotalPrice(quantity, price) {
    return quantity * price;
}

// Function to open modal
function openModal(product) {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'block';
    const totalPriceElement = document.getElementById('totalPrice');
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = 1; // Reset quantity input to default value
    totalPriceElement.textContent = `$${product.price.toFixed(2)}`;
}

// Function to show order details modal
// Function to show order details
function showOrderDetails(name, address, location, quantity, paymentMode, totalPrice) {
    const orderDetailsSection = document.getElementById('orderDetailsSection');
    const nameElement = document.getElementById('orderName');
    const addressElement = document.getElementById('orderAddress');
    const locationElement = document.getElementById('orderLocation');
    const quantityElement = document.getElementById('orderQuantity');
    const paymentModeElement = document.getElementById('orderPaymentMode');
    const totalPriceElement = document.getElementById('orderTotalPrice');

    nameElement.textContent = name;
    addressElement.textContent = address;
    locationElement.textContent = location;
    quantityElement.textContent = quantity;
    paymentModeElement.textContent = paymentMode;
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

    orderDetailsSection.style.display = 'block';
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const address = formData.get('address');
    const location = formData.get('location');
    const quantity = parseInt(formData.get('quantity'));
    const paymentMode = formData.get('paymentMode');

    // Get the selected product's price
    const productPrice = parseFloat(document.getElementById('totalPrice').textContent.replace('$', ''));

    // Calculate total price
    const totalPrice = calculateTotalPrice(quantity, productPrice);

    // Show order details
    showOrderDetails(name, address, location, quantity, paymentMode, totalPrice);
}

// Event listeners
document.getElementById('placeOrderBtn').addEventListener('click', () => openModal(selectedProduct));
document.querySelector('.close').addEventListener('click', closeModal);
document.getElementById('orderForm').addEventListener('submit', handleSubmit);
