/*************************************************
 * CONFIGURACIÓN
 *************************************************/
const CONFIG = {
    instagramUrl: "https://www.instagram.com/racing_wear_ec",
    whatsappNumber: "5492257542539",
    mercadoPagoCheckoutUrl: "#"
};

/*************************************************
 * PRODUCTOS
 *************************************************/
const productos = [
    /* CAMPERAS */
    { id: 1,  nombre: "Aston Martin", tipo: "f1", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera1.jpeg"] },
    { id: 2,  nombre: "Formula 1 Pelicula", tipo: "f1", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera2.jpeg"] },
    { id: 3,  nombre: "Ferrari Roja", tipo: "f1", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera3.jpeg"] },
    { id: 4,  nombre: "Honda Ayrton Senna", tipo: "f1", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera4.jpeg"] },
    { id: 5,  nombre: "Mercedes-Benz", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera5.jpeg"] },
    { id: 6,  nombre: "McLaren", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera6.jpeg"] },
    { id: 7,  nombre: "Red Bull", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera7.jpeg"] },
    { id: 8,  nombre: "WRC Negra", tipo: "rally", categoria: "rally", precio: 110000, imagenes: ["img/camperas/campera8.jpeg"] },
    { id: 9,  nombre: "Yamaha", categoria: "moto", precio: 130000, imagenes: ["img/camperas/campera9.jpeg"] },
    { id: 10, nombre: "Red Bull Rompevientos", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera10.jpg"] },
    { id: 11, nombre: "Suzuki Rompevientos", categoria: "moto", precio: 130000, imagenes: ["img/camperas/campera11.jpg"] },
    { id: 12, nombre: "Ferrari Negra", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera12.jpg"] },
    { id: 13, nombre: "McLaren Rompevientos", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera13.jpg"] },
    { id: 14, nombre: "Dakar Azul", categoria: "rally", precio: 130000, imagenes: ["img/camperas/campera14.jpg"] },
    { id: 15, nombre: "Ferrari Rompevientos", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera15.jpg"] },
    { id: 16, nombre: "Mercedes-Benz Rompevientos", categoria: "f1", precio: 130000, imagenes: ["img/camperas/campera16.jpg"] },
    { id: 17, nombre: "Dakar Roja", categoria: "rally", precio: 130000, imagenes: ["img/camperas/campera17.jpg"] },

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
    { id: 110, nombre: "Dakar Roja", categoria: "rally", precio: 80000, imagenes: ["img/remeras/remera10.jpg"] }
];

/*************************************************
 * CARRUSEL
 *************************************************/
function createCarousel(imagenes) {
    if (imagenes.length <= 1) {
        return `
            <div class="carousel">
                <img src="${imagenes[0]}" class="single-image">
            </div>
        `;
    }

    return `
        <div class="carousel">
            <button class="prev">‹</button>
            <img src="${imagenes[0]}" class="product-img">
            <button class="next">›</button>
        </div>
    `;
}

/*************************************************
 * RENDERIZAR
 *************************************************/
function renderProducts(list = productos) {
    const camperasGrid = document.getElementById("camperas-grid");
    const remerasGrid = document.getElementById("remeras-grid");

    camperasGrid.innerHTML = "";
    remerasGrid.innerHTML = "";

    list.forEach(prod => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.dataset.category = prod.categoria;

        card.innerHTML = `
            ${createCarousel(prod.imagenes)}
            <h3>${prod.nombre}</h3>
            <p class="price">$${prod.precio}</p>
            <button class="add-to-cart" data-id="${prod.id}">Agregar</button>
        `;

        if (prod.id <= 100) {
            camperasGrid.appendChild(card);
        } else {
            remerasGrid.appendChild(card);
        }
    });

    attachCarouselEvents();
    attachAddToCartEvents();
}

/*************************************************
 * CARRUSEL EVENTOS
 *************************************************/
function attachCarouselEvents() {
    document.querySelectorAll(".carousel").forEach(carousel => {
        const imgTag = carousel.querySelector(".product-img");
        if (!imgTag) return;

        const prodName = carousel.parentElement.querySelector("h3").textContent;
        const prod = productos.find(p => p.nombre === prodName);

        let index = 0;

        carousel.querySelector(".prev").onclick = () => {
            index = (index - 1 + prod.imagenes.length) % prod.imagenes.length;
            imgTag.src = prod.imagenes[index];
        };

        carousel.querySelector(".next").onclick = () => {
            index = (index + 1) % prod.imagenes.length;
            imgTag.src = prod.imagenes[index];
        };
    });
}

/*************************************************
 * CARRITO
 *************************************************/
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
    const item = cart.find(p => p.id === id);

    if (item) {
        if (item.cantidad >= 5) return;
        item.cantidad++;
    } else {
        const prod = productos.find(p => p.id === id);
        cart.push({ ...prod, cantidad: 1 });
    }

    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function attachAddToCartEvents() {
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.onclick = () => addToCart(parseInt(btn.dataset.id));
    });
}

function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;
    let cantidad = 0;

    cart.forEach(item => {
        total += item.precio * item.cantidad;
        cantidad += item.cantidad;

        cartItems.innerHTML += `
            <li>
                ${item.nombre} - $${item.precio} x ${item.cantidad}
                <div>
                    <button onclick="changeQuantity(${item.id}, -1)">−</button>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                    <button onclick="removeItem(${item.id})">✕</button>
                </div>
            </li>
        `;
    });

    cartCount.textContent = cantidad;
    cartTotal.textContent = `$${total}`;
}

function changeQuantity(id, delta) {
    const item = cart.find(p => p.id === id);
    if (!item) return;

    if (delta === 1 && item.cantidad >= 5) return;

    item.cantidad += delta;

    if (item.cantidad <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    saveCart();
    updateCartUI();
}

function removeItem(id) {
    cart = cart.filter(p => p.id !== id);
    saveCart();
    updateCartUI();
}

/*************************************************
 * FILTROS
 *************************************************/
function applyFilter(category) {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        const prodCat = card.dataset.category;

        if (category === "all" || prodCat === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = () => applyFilter(btn.dataset.filter);
});

/*************************************************
 * CHECKOUT WHATSAPP
 *************************************************/
document.getElementById("whatsappCheckout").onclick = () => {
    if (cart.length === 0) return;

    let mensaje = "Pedido Racing Wear EC:%0A%0A";

    cart.forEach(item => {
        mensaje += `${item.nombre} x ${item.cantidad} = $${item.precio * item.cantidad}%0A`;
    });

    const total = cart.reduce((s, i) => s + i.precio * i.cantidad, 0);
    mensaje += `%0ATotal: $${total}`;

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${mensaje}`, "_blank");
};

/*************************************************
 * PANEL CARRITO
 *************************************************/
document.getElementById("toggle-cart").onclick = () => {
    document.getElementById("cart-panel").classList.add("open");
};

document.getElementById("close-cart").onclick = () => {
    document.getElementById("cart-panel").classList.remove("open");
};

/*************************************************
 * REDES SOCIALES
 *************************************************/
document.getElementById("instagramLink").href = CONFIG.instagramUrl;
document.getElementById("whatsappTop").href = `https://wa.me/${CONFIG.whatsappNumber}`;

/*************************************************
 * INICIO
 *************************************************/
renderProducts();
updateCartUI();
applyFilter("all");

// ===== MODAL IMAGEN =====
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
  modal.classList.remove("open");
});

// Función para abrir modal
function openImageModal(product) {
  modalImg.src = product.images[0];
  modalTitle.textContent = product.name;
  modalDesc.textContent = product.desc;
  modalPrice.textContent = "$" + product.price;
  modal.classList.add("open");
}


