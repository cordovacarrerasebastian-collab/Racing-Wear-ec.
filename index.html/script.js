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

  /* ===== CAMPERAS ===== */
  { id: 1, nombre: "Aston Martin", categoria: "f1", seccion: "camperas", precio: 130000, imagenes: ["img/camperas/campera1.jpeg"] },
  { id: 2, nombre: "Formula 1 Pelicula", categoria: "f1", seccion: "camperas", precio: 130000, imagenes: ["img/camperas/campera2.jpeg"] },
  { id: 3, nombre: "Ferrari Roja", categoria: "f1", seccion: "camperas", precio: 130000, imagenes: ["img/camperas/campera3.jpeg"] },
  { id: 4, nombre: "Honda Ayrton Senna", categoria: "f1", seccion: "camperas", precio: 130000, imagenes: ["img/camperas/campera4.jpeg"] },
  { id: 5, nombre: "Mercedes-Benz", categoria: "f1", seccion: "camperas", precio: 130000, imagenes: ["img/camperas/campera5.jpeg"] },
  { id: 6, nombre: "McLaren", categoria: "f1", seccion: "camperas", precio: 130000, imagenes: ["img/camperas/campera6.jpeg"] },
  { id: 7, nombre: "Red Bull", categoria: "f1", seccion: "camperas", precio: 130000, imagenes: ["img/camperas/campera7.jpeg"] },
  { id: 8, nombre: "WRC Negra", categoria: "rally", seccion: "camperas", precio: 130000, imagenes: ["img/camperas/campera8.jpeg"] },
  { id: 9, nombre: "Yamaha", categoria: "moto", seccion: "camperas", precio: 130000, imagenes: ["img/camperas/campera9.jpeg"] },

  /* ===== REMERAS ===== */
  { id: 101, nombre: "Aston Martin", categoria: "f1", seccion: "remeras", precio: 80000, imagenes: ["img/remeras/remera1.avif"] },
  { id: 102, nombre: "Ferrari Roja", categoria: "f1", seccion: "remeras", precio: 80000, imagenes: ["img/remeras/remera2.jpeg"] },
  { id: 103, nombre: "Formula 1 Pelicula", categoria: "f1", seccion: "remeras", precio: 80000, imagenes: ["img/remeras/remera3.jpeg"] },

  /* ===== BUZOS (13) ===== */
  { id: 201, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo1.jpg"] },
  { id: 202, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo2.jpg"] },
  { id: 203, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo3.jpg"] },
  { id: 204, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo4.jpg"] },
  { id: 205, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo5.jpg"] },
  { id: 206, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo6.jpg"] },
  { id: 207, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo7.jpg"] },
  { id: 208, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo8.jpg"] },
  { id: 209, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo9.jpg"] },
  { id: 210, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo10.jpg"] },
  { id: 211, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo11.jpg"] },
  { id: 212, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo12.jpg"] },
  { id: 213, nombre: "Jersey", categoria: "motocross", seccion: "buzos", precio: 75000, imagenes: ["img/buzos/buzo13.jpg"] }
];

/*************************************************
 * RENDER
 *************************************************/
function renderProducts() {
  document.getElementById("camperas-grid").innerHTML = "";
  document.getElementById("remeras-grid").innerHTML = "";
  document.getElementById("buzos-grid").innerHTML = "";

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.category = prod.categoria;

    card.innerHTML = `
      <div class="carousel">
        <img src="${prod.imagenes[0]}" data-id="${prod.id}" class="product-img">
      </div>
      <h3>${prod.nombre}</h3>
      <p class="price">$${prod.precio}</p>
      <button class="add-to-cart" data-id="${prod.id}">Agregar</button>
    `;

    document.getElementById(`${prod.seccion}-grid`).appendChild(card);
  });

  attachAddToCartEvents();
}

/*************************************************
 * CARRITO
 *************************************************/
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  const prod = productos.find(p => p.id === id);
  const item = cart.find(p => p.id === id);

  if (item) item.cantidad++;
  else cart.push({ ...prod, cantidad: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function attachAddToCartEvents() {
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.onclick = () => addToCart(Number(btn.dataset.id));
  });
}

function updateCartUI() {
  document.getElementById("cart-count").textContent =
    cart.reduce((s, i) => s + i.cantidad, 0);
}

/*************************************************
 * FILTROS
 *************************************************/
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.onclick = () => {
    const cat = btn.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      card.style.display =
        cat === "all" || card.dataset.category === cat ? "block" : "none";
    });
  };
});

/*************************************************
 * INICIO
 *************************************************/
renderProducts();
updateCartUI();
