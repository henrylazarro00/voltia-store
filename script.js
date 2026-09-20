// ============================================================
// VOLTIA — CATÁLOGO REAL + CARRITO + WHATSAPP
// ============================================================

const WHATSAPP_NUMBER = "5356582525";

// ============================================================
// CATÁLOGO REAL VOLTIA
// Fuente: catálogo VOLTIA en Notion
// ============================================================

const products = [

    {
        id: 1,
        name: "OVNS 25K Puffs",
        category: "Vapers",
        price: 16,
        image: "",
        description: "Vaper de 25K puffs con indicador de batería y líquido.",
        features: [
            "25K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Nicotina 5%"
        ],
        flavors: [
            "Mango Banana 🥭🍌"
        ]
    },

    {
        id: 2,
        name: "NORT HANDSHAKE 15K Puffs",
        category: "Vapers",
        price: 16,
        image: "",
        description: "Vaper de 15K puffs con batería y líquido visibles.",
        features: [
            "15K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Nicotina 5%"
        ],
        flavors: [
            "Watermelon Ice 🍉🧊",
            "Miami Mint 🌆🌿",
            "Strawberry Kiwi 🥝🍓"
        ]
    },

    {
        id: 3,
        name: "FEED SYNC 30K Puffs",
        category: "Vapers",
        price: 18,
        image: "",
        description: "Vaper de 30K puffs con funciones multimedia.",
        features: [
            "30K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Nicotina 5%",
            "Juegos",
            "APK",
            "Llamadas"
        ],
        flavors: [
            "Mango Fiesta 🥭🎉",
            "Green Apple 🍏"
        ]
    },

    {
        id: 4,
        name: "REING BAR 25K Puffs",
        category: "Vapers",
        price: 16,
        image: "",
        description: "Vaper de 25K puffs.",
        features: [
            "25K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Nicotina 5%"
        ],
        flavors: [
            "Blue Razz Ice 🫐🧊",
            "Cool Mint 🌿🧊",
            "Miami Mint 🌇🌿",
            "Strawberry Banana 🍓🍌"
        ]
    },

    {
        id: 5,
        name: "REING BAR 50K Puffs · Doble Vaper",
        category: "Vapers",
        price: 25,
        image: "",
        description: "Doble vaper de 50K puffs con dos partes de 25K.",
        features: [
            "50K Puffs",
            "2 partes de 25K puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Pantalla 3D con animaciones",
            "Nicotina 5%",
            "Permite elegir 2 sabores diferentes para crear un Mix"
        ],
        flavors: [
            "Blue Razz Ice 🫐🧊",
            "Cool Mint 🌿🧊",
            "Miami Mint 🌇🌿",
            "Strawberry Banana 🍓🍌"
        ]
    },

    {
        id: 6,
        name: "EbCreate BC Pro 40K Puffs",
        category: "Vapers",
        price: 20,
        image: "",
        description: "Vaper de 40K puffs con batería de 1000mAh y flujo de aire ajustable.",
        features: [
            "40K Puffs",
            "Batería recargable 1000mAh",
            "17 ml de e-líquido",
            "Nicotina salina 5% (50mg/ml)",
            "Dual coil mesh",
            "Flujo de aire ajustable",
            "Pantalla LED",
            "USB Tipo-C"
        ],
        flavors: [
            "Black Mint 🫐🧊",
            "Winter Mint 🌿🧊",
            "Sour Apple 🍎",
            "Strawberry Kiwi 🍓🥝",
            "Watermelon Ice 🍉🧊"
        ]
    },

    {
        id: 7,
        name: "Hello Synix 30K Puffs",
        category: "Vapers",
        price: 18,
        image: "",
        description: "Vaper de 30K puffs con pantalla táctil y Bluetooth.",
        features: [
            "30K Puffs",
            "Pantalla táctil",
            "Bluetooth",
            "Batería 1000mAh",
            "USB Tipo-C"
        ],
        flavors: [
            "Watermelon Ice 🍉🧊",
            "Strawberry Kiwi 🍓🥝",
            "Peach Juice 🍑"
        ]
    },

    {
        id: 8,
        name: "DOJO iMATE 40K Puffs",
        category: "Vapers",
        price: 20,
        image: "",
        description: "Vaper de 40K puffs recargable por USB Tipo-C.",
        features: [
            "40K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Nicotina 5%"
        ],
        flavors: [
            "Peachy Smash 🍑",
            "Blue Razz Ice 🔵",
            "White Grape Ice 🍇",
            "Watermelon Ice 🍉🧊"
        ]
    },

    {
        id: 9,
        name: "Adjust 40K Puffs",
        category: "Vapers",
        price: 20,
        image: "",
        description: "Vaper de 40K puffs con indicador de batería y líquido.",
        features: [
            "40K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Nicotina 5%"
        ],
        flavors: [
            "Winter Mint 🌿🧊",
            "Fresa Banana 🍓🍌",
            "Watermelon Ice 🍉🧊",
            "Blue Razz Ice 🫐🧊"
        ]
    },

    {
        id: 10,
        name: "Geek Bar Plus 40K Puffs",
        category: "Vapers",
        price: 20,
        image: "",
        description: "Vaper Geek Bar de 40K puffs.",
        features: [
            "40K Puffs"
        ],
        flavors: [
            "BlackBerry Blueberry 🌑",
            "Grape Slush 🍇",
            "Sour Apple 🍎"
        ]
    },

    {
        id: 11,
        name: "DONUT SOUNETE 50K Puffs",
        category: "Vapers",
        price: 20,
        image: "",
        description: "Vaper de 50K puffs con pantalla 3D.",
        features: [
            "50K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Pantalla 3D con animaciones",
            "Nicotina 5%"
        ],
        flavors: [
            "Piña Colada 🥥🍍",
            "Miami Mint 🌆🌿",
            "Watermelon Ice 🍉🧊"
        ]
    },

    {
        id: 12,
        name: "Tasteflex Ultralock 50K Puffs",
        category: "Vapers",
        price: 20,
        image: "",
        description: "Vaper de 50K puffs con pantalla 3D.",
        features: [
            "50K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Pantalla 3D con animaciones",
            "Nicotina 5%"
        ],
        flavors: [
            "Sour Apple Ice 🍏🧊",
            "Miami Mint 🌆🌿",
            "White Gummy 🍦🍰"
        ]
    },

    {
        id: 13,
        name: "Geek Prime 50K Puffs",
        category: "Vapers",
        price: 26,
        image: "",
        description: "Vaper Geek Prime de 50K puffs.",
        features: [
            "50K Puffs",
            "Recargable USB Tipo-C",
            "Indicador de batería y líquido"
        ],
        flavors: [
            "Skittle Ice"
        ]
    },

    {
        id: 14,
        name: "VOM METEORO 70K Puffs",
        category: "Vapers",
        price: 22,
        image: "",
        description: "Vaper de 70K puffs con USB Tipo-C.",
        features: [
            "70K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Nicotina 5%"
        ],
        flavors: [
            "Triple Melón Mint 🍉🌿",
            "Sour Apple 🍎",
            "Strawberry Kiwi 🥝🍓"
        ]
    },

    {
        id: 15,
        name: "Dinner Lady 60K Puffs",
        category: "Vapers",
        price: 20,
        image: "",
        description: "Vaper Dinner Lady de 60K puffs con pantalla 3D.",
        features: [
            "60K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Pantalla 3D con animaciones",
            "Nicotina 5%"
        ],
        flavors: [
            "Strawberry B-Pop 🍓",
            "Ultimate Melon 🍉",
            "Uva Chicle 🍇🍬"
        ]
    },

    {
        id: 16,
        name: "ROOPBAR 60K Puffs",
        category: "Vapers",
        price: 22,
        image: "",
        description: "Vaper ROOPBAR de 60K puffs.",
        features: [
            "60K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Nicotina 5%"
        ],
        flavors: [
            "Strawberry Watermelon 🍉🍓",
            "Blue Razz",
            "Strawberry Kiwi 🍓🥝",
            "Blueberry 🫐",
            "Miami Mint 🌆🌿",
            "Watermelon 🍉"
        ]
    },

    {
        id: 17,
        name: "HQD SISA HOOKAH 80K",
        category: "Vapers",
        price: 30,
        image: "",
        description: "Vaper HQD SISA HOOKAH de 80K.",
        features: [
            "80K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Pantalla 3D con animaciones",
            "Nicotina 5%"
        ],
        flavors: [
            "Blue Mint 🫐🌿",
            "Black Ice 🫐🧊",
            "Love 66 🌈"
        ]
    },

    {
        id: 18,
        name: "IYOY 35K Puffs",
        category: "Vapers",
        price: 20,
        image: "",
        description: "Vaper IYOY de 35K puffs con pantalla 3D.",
        features: [
            "35K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Pantalla 3D con animaciones",
            "Nicotina 5%"
        ],
        flavors: [
            "Cool Mint 🧊🌿",
            "Miami Mint 🌆🌿",
            "Strawberry Ice 🍓🧊",
            "Watermelon Ice 🍉🧊"
        ]
    },

    {
        id: 19,
        name: "AXTERIX CT3 45K Puffs",
        category: "Vapers",
        price: 22,
        image: "",
        description: "Vaper AXTERIX CT3 de 45K puffs.",
        features: [
            "45K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Nicotina 5%"
        ],
        flavors: [
            "Miami Mint 🌆🌿",
            "Watermelon Ice 🍉🧊",
            "Blue Razz Ice 🫐🧊",
            "Watermelon B-Pop 🍉",
            "Strawberry B-Pop 🍓"
        ]
    },

    {
        id: 20,
        name: "Snoopysmoke 15K Puffs",
        category: "Vapers",
        price: 14,
        image: "",
        description: "Vaper Snoopysmoke de 15K puffs con double tank.",
        features: [
            "15K Puffs",
            "Double tank"
        ],
        flavors: [
            "Lush Ice"
        ]
    },

    {
        id: 21,
        name: "LOST ANGEL 50K Puffs",
        category: "Vapers",
        price: 20,
        image: "",
        description: "Vaper LOST ANGEL de 50K puffs con pantalla 3D.",
        features: [
            "50K Puffs",
            "Indicador de batería y líquido",
            "Recargable USB Tipo-C",
            "Pantalla 3D con animaciones",
            "Nicotina 5%"
        ],
        flavors: [
            "Miami Mint",
            "Blue Razz Ice",
            "Ice Mint",
            "Strawberry Ice",
            "Watermelon Ice"
        ]
    }

];

// ============================================================
// ESTADO DEL CARRITO
// ============================================================

let cart = JSON.parse(localStorage.getItem("voltiaCart")) || [];

// ============================================================
// ELEMENTOS DEL DOM
// ============================================================

const productsContainer =
    document.getElementById("products-container") ||
    document.getElementById("products") ||
    document.querySelector(".products-grid");

const cartContainer =
    document.getElementById("cart-items") ||
    document.getElementById("cart");

const cartCount =
    document.getElementById("cart-count") ||
    document.querySelector(".cart-count");

const cartTotal =
    document.getElementById("cart-total") ||
    document.querySelector(".cart-total");

const searchInput =
    document.getElementById("search-input") ||
    document.getElementById("search");

const categoryButtons =
    document.querySelectorAll("[data-category]");

// ============================================================
// GUARDAR CARRITO
// ============================================================

function saveCart() {
    localStorage.setItem("voltiaCart", JSON.stringify(cart));
}

// ============================================================
// FORMATO DE PRECIO
// ============================================================

function formatPrice(price) {
    return `$${Number(price).toFixed(2)} USD`;
}

// ============================================================
// ESCAPAR HTML
// ============================================================

function escapeHTML(text) {
    if (typeof text !== "string") return text;

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ============================================================
// RENDERIZAR PRODUCTOS
// ============================================================

function renderProducts(list = products) {

    if (!productsContainer) return;

    if (!list.length) {
        productsContainer.innerHTML = `
            <div class="no-products">
                <p>No encontramos productos.</p>
            </div>
        `;
        return;
    }

    productsContainer.innerHTML = list.map(product => {

        const flavorHTML = product.flavors && product.flavors.length
            ? `
                <div class="product-flavors">
                    <strong>Sabores:</strong>
                    <div class="flavor-list">
                        ${product.flavors.map(flavor => `
                            <span class="flavor">
                                ${escapeHTML(flavor)}
                            </span>
                        `).join("")}
                    </div>
                </div>
            `
            : "";

        const featuresHTML = product.features && product.features.length
            ? `
                <ul class="product-features">
                    ${product.features.map(feature => `
                        <li>${escapeHTML(feature)}</li>
                    `).join("")}
                </ul>
            `
            : "";

        return `
            <article class="product-card" data-product-id="${product.id}">

                <div class="product-image">

                    ${
                        product.image
                        ? `<img 
                            src="${escapeHTML(product.image)}"
                            alt="${escapeHTML(product.name)}"
                            loading="lazy"
                          >`
                        : `
                            <div class="product-placeholder">
                                💨
                            </div>
                          `
                    }

                </div>

                <div class="product-info">

                    <span class="product-category">
                        ${escapeHTML(product.category)}
                    </span>

                    <h3 class="product-name">
                        ${escapeHTML(product.name)}
                    </h3>

                    <p class="product-description">
                        ${escapeHTML(product.description)}
                    </p>

                    ${featuresHTML}

                    ${flavorHTML}

                    <div class="product-bottom">

                        <span class="product-price">
                            ${formatPrice(product.price)}
                        </span>

                        <button
                            class="add-to-cart"
                            onclick="addToCart(${product.id})"
                            type="button"
                        >
                            Añadir
                        </button>

                    </div>

                </div>

            </article>
        `;

    }).join("");
}

// ============================================================
// AÑADIR AL CARRITO
// ============================================================

function addToCart(productId, flavor = null) {

    const product = products.find(p => p.id === Number(productId));

    if (!product) return;

    // Si el producto tiene sabores y no se especificó uno,
    // se utiliza el primero como opción inicial.
    const selectedFlavor =
        flavor ||
        (product.flavors && product.flavors.length
            ? product.flavors[0]
            : null);

    const existingItem = cart.find(item =>
        item.productId === product.id &&
        item.flavor === selectedFlavor
    );

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            productId: product.id,
            name: product.name,
            price: product.price,
            flavor: selectedFlavor,
            quantity: 1
        });

    }

    saveCart();
    renderCart();
    updateCartUI();

    showNotification(
        `${product.name} añadido al carrito`
    );
}

// ============================================================
// ELIMINAR DEL CARRITO
// ============================================================

function removeFromCart(index) {

    if (index < 0 || index >= cart.length) return;

    cart.splice(index, 1);

    saveCart();
    renderCart();
    updateCartUI();
}

// ============================================================
// CAMBIAR CANTIDAD
// ============================================================

function changeQuantity(index, amount) {

    if (!cart[index]) return;

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    renderCart();
    updateCartUI();
}

// ============================================================
// TOTAL DE UNIDADES
// ============================================================

function getCartCount() {

    return cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

}

// ============================================================
// TOTAL DEL CARRITO
// ============================================================

function getCartTotal() {

    return cart.reduce(
        (total, item) =>
            total + (Number(item.price) * Number(item.quantity)),
        0
    );

}

// ============================================================
// RENDERIZAR CARRITO
// ============================================================

function renderCart() {

    if (!cartContainer) return;

    if (!cart.length) {

        cartContainer.innerHTML = `
            <div class="empty-cart">
                <span>🛒</span>
                <p>Tu carrito está vacío.</p>
            </div>
        `;

        return;
    }

    cartContainer.innerHTML = cart.map((item, index) => {

        return `
            <div class="cart-item">

                <div class="cart-item-info">

                    <h4>
                        ${escapeHTML(item.name)}
                    </h4>

                    ${
                        item.flavor
                        ? `
                            <small>
                                Sabor: ${escapeHTML(item.flavor)}
                            </small>
                          `
                        : ""
                    }

                    <span class="cart-item-price">
                        ${formatPrice(item.price)}
                    </span>

                </div>

                <div class="cart-item-controls">

                    <but