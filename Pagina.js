// script.js

let slideIndex = 0;
slidesMoletom(slideIndex);
let cart = [];
let total = 0;

function slidesMoletom(n) {
    let i;
    let slides = document.getElementsByClassName("Moletom");
    let thumbnails = document.getElementsByClassName("thumbnail");

    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    thumbnails[slideIndex].className += " active";
    slideIndex++;
    setTimeout(() => slidesMoletom(slideIndex), 4000); // Muda de imagem a cada 4 segundos
}

function currentSlide(n) {
    slideIndex = n - 1; // Ajuste para o índice de 0
    slidesMoletom(slideIndex);
}

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCart();
}

function updateCart() {
    let cartCount = document.getElementById('cart-count');
    let cartItems = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');

    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';

    total = 0;
    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<div>${item.name}: $${item.price}</div>`;
    });

    cartTotal.textContent = total.toFixed(2);
}
