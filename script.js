// ==========================================
// VOLTIA - CATÁLOGO Y CARRITO
// ==========================================

// Número de WhatsApp de VOLTIA.
// IMPORTANTE: sustituye este valor por tu número
// en formato internacional, sin +, espacios ni guiones.
//
// Ejemplo:
// const WHATSAPP_NUMBER = "535XXXXXXXX";
const WHATSAPP_NUMBER = "TU_NUMERO_AQUI";


// ==========================================
// PRODUCTOS
// ==========================================

const products = [

    {
        id: 1,
        name: "EcoFlow DELTA 2",
        category: "Estaciones de energía",
        price: 999,
        description: "Estación de energía portátil para respaldo y uso doméstico.",
        emoji: "🔋"
    },

    {
        id: 2,
        name: "EcoFlow RIVER 2 Pro",
        category: "Estaciones de energía",
        price: 649,
        description: "Estación de energía portátil compacta y versátil.",
        emoji: "🔋"
    },

    {
        id: 3,
        name: "Panel Solar 550W",
        category: "Energía Solar",
        price: 249,
        description: "Panel solar de alta potencia para sistemas fotovoltaicos.",
        emoji: "☀️"
    },

    {
        id: 4,
        name: "Kit Solar Residencial",
        category: "Energía Solar",
        price: 1899,
        description: "Solución solar para generación y respaldo energético.",
        emoji: "☀️"
    },

    {
        id: 5,
        name: "Inversor Solar",
        category: "Energía Solar",
        price: 599,
        description: "Inversor para sistemas de energía solar.",
        emoji: "⚡"
    },

    {
        id: 6,
        name: "Refrigerador",
        category: "Electrodomésticos",
        price: 699,
        description: "Refrigerador moderno para el hogar.",
        emoji: "🧊"
    },

    {
        id: 7,
        name: "Lavadora",
        category: "Electrodomésticos",
        price: 549,
        description: "Lavadora para uso doméstico.",
        emoji: "🧺"
    },

    {
        id: 8,
        name: "Aire Acondicionado",
        category: "Electrodomésticos",
        price: 799,
        description: "Sistema de climatización para el hogar.",
        emoji: "❄️"
    },

    {
        id: 9,
        name: "Moto Eléctrica",
        category: "Movilidad",
        price: 1899,
        description: "Movilidad eléctrica para desplazamientos urbanos.",
        emoji: "🏍️"
    },

    {
        id: 10,
        name: "Taladro Eléctrico",
        category: "Herramientas",
        price: 129,
        description: "Herramienta eléctrica para trabajos domésticos.",
        emoji: "🔧"
    },

    {
        id: 11,
        name: "Smart TV",
        category: "Tecnología",
        price: 399,
        description: "Televisor inteligente para entretenimiento en casa.",
        emoji: "📺"
    },

    {
        id: 12,
        name: "Power Bank",
        category: "Tecnología",
        price: 49,
        description: "Batería portátil para dispositivos electrónicos.",
        emoji: "🔌"
    }

];


// ==========================================
// CARRITO
// ==========================================

let cart = JSON.parse(localStorage.getItem("voltiaCart")) || [];


// ==========================================
// ELEMENTOS
// ==========================================

const productContainer =
    document.getElementById("productContainer");

const cartCount =
    document.getElementById("cartCount");

const cartButton =
    document.getElementById("cartButton");


// ==========================================
// MOSTRAR PRODUCTOS
// ==========================================

function renderProducts() {

    productContainer.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div style="
                height:180px;
                display:flex;
                align-items:center;
                justify-content:center;
                background:#f2f2f2;
                border-radius:15px;
                font-size:70px;
                margin-bottom:20px;
            ">
                ${product.emoji}
            </div>

            <p style="
                color:#777;
                font-size:14px;
            ">
                ${product.category}
            </p>

            <h3 style="margin:10px 0;">
                ${product.name}
            </h3>

            <p style="
                color:#666;
                min-height:45px;
            ">
                ${product.description}
            </p>

            <h3 style="margin:15px 0;">
                $${product.price.toLocaleString("en-US")}
            </h3>

            <button onclick="addToCart(${product.id})">
                Agregar al carrito
            </button>

        `;

        productContainer.appendChild(card);

    });

}


// ==========================================
// AGREGAR AL CARRITO
// ==========================================

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) return;


    const existingProduct = cart.find(
        item => item.id === productId
    );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    saveCart();

    updateCartCount();

    alert(`${product.name} fue agregado al carrito.`);

}


// ==========================================
// GUARDAR CARRITO
// ==========================================

function saveCart() {

    localStorage.setItem(
        "voltiaCart",
        JSON.stringify(cart)
    );

}


// ==========================================
// CONTADOR DEL CARRITO
// ==========================================

function updateCartCount() {

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = totalItems;

}


// ==========================================
// MOSTRAR CARRITO
// ==========================================

function showCart() {

    if (cart.length === 0) {

        alert("Tu carrito está vacío.");

        return;

    }


    let message = "🛒 CARRITO VOLTIA\n\n";

    let total = 0;


    cart.forEach(item => {

        const subtotal =
            item.price * item.quantity;

        total += subtotal;


        message +=
            `${item.name}\n` +
            `Cantidad: ${item.quantity}\n` +
            `Precio: $${item.price.toLocaleString("en-US")}\n` +
            `Subtotal: $${subtotal.toLocaleString("en-US")}\n\n`;

    });


    message +=
        `TOTAL: $${total.toLocaleString("en-US")}\n\n` +
        `¿Deseas realizar este pedido?`;


    const encodedMessage =
        encodeURIComponent(message);


    if (
        WHATSAPP_NUMBER === "TU_NUMERO_AQUI"
    ) {

        alert(
            "Primero debes configurar el número de WhatsApp de VOLTIA en script.js."
        );

        return;

    }


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}


// ==========================================
// EVENTOS
// ==========================================

cartButton.addEventListener(
    "click",
    showCart
);


// ==========================================
// INICIALIZACIÓN
// ==========================================

renderProducts();

updateCartCount();
