/*************************************************
 * CONFIGURACIÓN
 *************************************************/
const CONFIG = {
    instagramUrl: "https://www.instagram.com/racing_wear_ec",
    whatsappNumber: "5492257542539"
};

/*************************************************
 * PRODUCTOS
 *************************************************/
const productos = [
     /* CAMPERAS */
    { id: 1, nombre: "Aston Martin", tipo: "f1", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera1.jpeg"] },
    { id: 2, nombre: "Formula 1 Pelicula", tipo: "f1", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera2.jpeg"] },
    { id: 3, nombre: "Ferrari Roja", tipo: "f1", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera3.jpeg"] },
    { id: 4, nombre: "Honda Ayrton Senna", tipo: "f1", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera4.jpeg"] },
    { id: 5, nombre: "Mercedes-Benz", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera5.jpeg"] },
    { id: 6, nombre: "McLaren", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera6.jpeg"] },
    { id: 7, nombre: "Red Bull", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera7.jpeg"] },
    { id: 8, nombre: "WRC Negra", categoria: "rally", precio: 130000, imagenes: ["img/camperas/campera8.jpeg"] },
    { id: 9, nombre: "Yamaha", categoria: "moto", precio: 130000, imagenes: ["img/camperas/campera9.jpeg"] },
    { id: 10, nombre: "Red Bull Rompevientos", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera10.jpg"] },
    { id: 11, nombre: "Suzuki Rompevientos", categoria: "moto", precio: 130000, imagenes: ["img/camperas/campera11.jpg"] },
    { id: 12, nombre: "Ferrari Negra", categoria: "f1", precio: 110000, imagenes: ["img/camperas/campera12.jpg"] },
    { id: 13, nombre: "McLaren Rompevientos", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera13.jpg"] },
    { id: 14, nombre: "Dakar Azul", categoria: "rally", precio: 110000, imagenes: ["img/camperas/campera14.jpg"] },
    { id: 15, nombre: "Ferrari Rompevientos", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera15.jpg"] },
    { id: 16, nombre: "Mercedes-Benz Rompevientos", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera16.jpg"] },
    { id: 17, nombre: "Dakar Roja", categoria: "rally", precio: 110000, imagenes: ["img/camperas/campera17.jpg"] },

    /* REMERAS */
    { id: 101, nombre: "Aston Martin", categoria: "f1", precio: 80000, imagenes: ["img/remeras/remera1.avif"] },
    { id: 102, nombre: "Ferrari Roja", categoria: "f1", precio: 80000, imagenes: ["img/remeras/remera2.jpeg"] },
    { id: 103, nombre: "Formula 1 Pelicula", categoria: "f1", precio: 80000, imagenes: ["img/remeras/remera3.jpeg"] },
    { id: 104, nombre: "Mercedes-Benz", categoria: "f1", precio: 80000, imagenes: ["img/remeras/remera4.jpeg"] },
    { id: 105, nombre: "McLaren", categoria: "f1", precio: 80000, imagenes: ["img/remeras/remera5.avif"] },
    { id: 106, nombre: "Red Bull", categoria: "f1", precio: 80000, imagenes: ["img/remeras/remera6.jpeg"] },
    { id: 107, nombre: "WRC Blanca", categoria: "rally", precio: 80000, imagenes: ["img/remeras/remera7.jpeg"] },
    { id: 108, nombre: "WRC Negra", categoria: "rally", precio: 80000, imagenes: ["img/remeras/remera8.jpeg"] },
    { id: 109, nombre: "Dakar Azul", categoria: "rally", precio: 80000, imagenes: ["img/remeras/remera9.jpg"] },
    { id: 110, nombre: "Dakar Roja", categoria: "rally", precio: 80000, imagenes: ["img/remeras/remera10.jpg"] },


    /* BUZOS (13) */
    { id: 201, nombre: "Jersey 1", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo1.jpg"] },
    { id: 202, nombre: "Jersey 2", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo2.jpg"] },
    { id: 203, nombre: "Jersey 3", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo3.jpg"] },
    { id: 204, nombre: "Jersey 4", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo4.jpg"] },
    { id: 205, nombre: "Jersey 5", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo5.jpg"] },
    { id: 206, nombre: "Jersey 6", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo6.jpg"] },
    { id: 207, nombre: "Jersey 7", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo7.jpg"] },
    { id: 208, nombre: "Jersey 8", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo8.jpg"] },
    { id: 209, nombre: "Jersey 9", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo9.jpg"] },
    { id: 210, nombre: "Jersey 10", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo10.jpg"] },
    { id: 211, nombre: "Jersey 11", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo11.jpg"] },
    { id: 212, nombre: "Jersey 12", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo12.jpg"] },
    { id: 213, nombre: "Jersey 13", categoria: "moto", precio: 75000, imagenes: ["img/buzos/buzo13.jpg"] },
];

/*************************************************
 * RENDER
 *************************************************/
function renderProducts(list = productos) {
    const camperas = document.getElementById("camperas-grid");
    const remeras = document.getElementById("remeras-grid");
    const buzos = document.getElementById("buzos-grid");

    camperas.innerHTML = "";
    remeras.innerHTML = "";
    buzos.innerHTML = "";

    list.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${p.imagenes[0]}" class="product-img" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p class="price">$${p.precio}</p>
            <button class="add-btn" data-id="${p.id}">Agregar</button>
        `;

        if (p.id < 100) camperas.appendChild(card);
        else if (p.id < 200) remeras.appendChild(card);
        else buzos.appendChild(card);
    });

    bindEvents();
}

/*************************************************
 * EVENTOS
 *************************************************/
function bindEvents() {
    document.querySelectorAll(".product-img").forEach(img => {
        img.onclick = () => {
            const name = img.nextElementSibling.textContent;
            const product = productos.find(p => p.nombre === name);
            openModal(product);
        };
    });

    document.querySelectorAll(".add-btn").forEach(btn => {
        btn.onclick = () => addToCart(parseInt(btn.dataset.id));
    });
}

/*************************************************
 * MODAL
 *************************************************/
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");

document.getElementById("closeModal").onclick = () => modal.classList.remove("open");

function openModal(p) {
    modalImg.src = p.imagenes[0];
    modalTitle.textContent = p.nombre;
    modalPrice.textContent = "$" + p.precio;
    modal.classList.add("open");
}

/*************************************************
 * CARRITO
 *************************************************/
let cart = [];

const cartPanel = document.getElementById("cart-panel");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

document.getElementById("toggle-cart").onclick = () => cartPanel.classList.toggle("open");
document.getElementById("close-cart").onclick = () => cartPanel.classList.remove("open");
document.getElementById("clear-cart").onclick = () => {
    cart = [];
    updateCart();
};

function addToCart(id) {
    const prod = productos.find(p => p.id === id);
    cart.push(prod);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(p => {
        total += p.precio;
        const li = document.createElement("li");
        li.textContent = `${p.nombre} - $${p.precio}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = "$" + total;
    cartCount.textContent = cart.length;
}

/*************************************************
 * WHATSAPP CHECKOUT
 *************************************************/
document.getElementById("whatsappCheckout").onclick = () => {
    if (!cart.length) return;
    const msg = cart.map(p => `${p.nombre} $${p.precio}`).join("%0A");
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`, "_blank");
};

/*************************************************
 * LINKS HEADER
 *************************************************/
document.getElementById("instagramLink").href = CONFIG.instagramUrl;
document.getElementById("whatsappTop").href = `https://wa.me/${CONFIG.whatsappNumber}`;

/*************************************************
 * FILTROS
 *************************************************/
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = () => {
        const f = btn.dataset.filter;
        renderProducts(f === "all" ? productos : productos.filter(p => p.categoria === f));
    };
});

/*************************************************
 * INIT
 *************************************************/
renderProducts();
