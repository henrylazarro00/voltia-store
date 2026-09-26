/* =========================================================
   VOLTIA — SCRIPT PRINCIPAL
   Catálogo + filtros + carrito + WhatsApp
   ========================================================= */

const WHATSAPP_NUMBER = "5356582525";

/* =========================================================
   CATÁLOGO
   ========================================================= */

const products = [

  /* =========================
     ESTACIONES DE ENERGÍA
     ========================= */

  {
    id: "ouppes-exodus-3600",
    name: "OUPES EXODUS",
    category: "Estaciones de energía",
    price: 550,
    badge: "",
    description: "Estación de energía portátil OUPES EXODUS.",
    specs: [
      "Potencia pico: 3600 W",
      "Potencia continua: 1200 W"
    ]
  },

  {
    id: "ouppes-mega-1-lite",
    name: "OUPES Mega 1 Lite",
    category: "Estaciones de energía",
    price: 750,
    badge: "",
    description: "Estación de energía portátil OUPES Mega 1 Lite.",
    specs: [
      "Potencia continua: 2000 W",
      "Potencia pico: 4500 W"
    ]
  },

  {
    id: "ouppes-exodus-4500",
    name: "OUPES EXODUS",
    category: "Estaciones de energía",
    price: 1200,
    badge: "",
    description: "Estación de energía portátil OUPES EXODUS de mayor potencia.",
    specs: [
      "Potencia pico: 4500 W",
      "Potencia continua: 2400 W"
    ]
  },

  {
    id: "ouppes-mega-2-pro",
    name: "OUPES Mega 2 Pro",
    category: "Estaciones de energía",
    price: 1200,
    badge: "",
    description: "Estación de energía portátil OUPES Mega 2 Pro.",
    specs: [
      "Potencia continua: 2500 W",
      "Potencia pico: 3900 W"
    ]
  },

  {
    id: "ecoflow-delta-3-classic",
    name: "EcoFlow Delta 3 Classic",
    category: "Estaciones de energía",
    price: 680,
    oldPrice: null,
    badge: "REBAJA TEMPORAL",
    description: "Estación EcoFlow Delta 3 Classic con 1024 Wh de capacidad.",
    specs: [
      "Capacidad: 1024 Wh",
      "Potencia indicada: 3600 W",
      "Carga rápida: 1 hora o poco más"
    ]
  },

  {
    id: "ecoflow-delta-3",
    name: "EcoFlow Delta 3",
    category: "Estaciones de energía",
    price: 780,
    description: "Estación de energía EcoFlow Delta 3.",
    specs: [
      "Capacidad: 1024 Wh",
      "Expandible hasta 5 kWh",
      "Salida AC: 6 tomas",
      "Potencia: 1800 W",
      "Potencia pico: 3600 W",
      "Admite batería extra"
    ]
  },

  {
    id: "ecoflow-delta-3-plus",
    name: "EcoFlow Delta 3 Plus",
    category: "Estaciones de energía",
    price: 880,
    description: "EcoFlow Delta 3 Plus con mayor conectividad y expansión.",
    specs: [
      "Más puertos que Delta 3 Classic",
      "Admite batería extra",
      "2 puertos para paneles"
    ]
  },

  {
    id: "ecoflow-delta-3-max",
    name: "EcoFlow Delta 3 Max",
    category: "Estaciones de energía",
    price: 1300,
    badge: "REBAJA TEMPORAL",
    description: "Estación de energía EcoFlow Delta 3 Max.",
    specs: [
      "Carga rápida: 1 hora o poco más"
    ]
  },

  {
    id: "gencell-p3200",
    name: "Genercell P3200",
    category: "Estaciones de energía",
    price: 1350,
    description: "Estación de energía Genercell P3200 con batería LiFePO4.",
    specs: [
      "Potencia de salida: 3200 W",
      "Potencia pico: 6400 W",
      "Salida: 120 VAC / 60 Hz",
      "Batería LiFePO4: 51.2 V / 40 Ah",
      "Capacidad: 2048 Wh",
      "Recarga: 90 min",
      "4 tomas NEMA 5-15R",
      "Carga por red, paneles solares o vehículo"
    ]
  },

  {
    id: "ecoflow-delta-2-max",
    name: "EcoFlow Delta 2 Max",
    category: "Estaciones de energía",
    price: 1550,
    description: "Estación de energía EcoFlow Delta 2 Max.",
    specs: [
      "Carga rápida: 1 hora o poco más"
    ]
  },

  {
    id: "ecoflow-delta-pro-3",
    name: "EcoFlow Delta PRO 3",
    category: "Estaciones de energía",
    price: 3300,
    description: "Estación de energía de alta capacidad EcoFlow Delta PRO 3.",
    specs: [
      "110/220 V",
      "Capacidad: 4000 Wh",
      "Potencia máxima: 8000 W",
      "Potencia nominal: 3600 W"
    ]
  },

  {
    id: "ecoflow-delta-pro-ultra",
    name: "EcoFlow Delta Pro Ultra",
    category: "Estaciones de energía",
    price: 4550,
    description: "Sistema de almacenamiento de energía EcoFlow Delta Pro Ultra.",
    specs: [
      "110/220 V",
      "Potencia indicada: 7200 W",
      "Según proveedor, una unidad puede alimentar una vivienda completa"
    ]
  },

  {
    id: "oukitel-5000wh",
    name: "Oukitel",
    category: "Estaciones de energía",
    price: 2500,
    description: "Estación de energía Oukitel de gran capacidad.",
    specs: [
      "Capacidad: 5000 Wh",
      "110/220 V"
    ]
  },

  {
    id: "pecron-3272wh",
    name: "Pecron",
    category: "Estaciones de energía",
    price: 1600,
    description: "Estación de energía Pecron de 3272 Wh.",
    specs: [
      "Capacidad: 3272 Wh",
      "Potencia pico: 4500 W",
      "Entrada para 2 paneles de 500 W",
      "Entrada para batería extra"
    ]
  },


  /* =========================
     PLANTAS ELÉCTRICAS
     ========================= */

  {
    id: "wen-14500",
    name: "WEN 14 500 W",
    category: "Plantas eléctricas",
    price: 2550,
    description: "Planta eléctrica de alta potencia WEN.",
    specs: [
      "Potencia: 14 500 W",
      "Funciona con gas de la calle",
      "Gas de balita",
      "Gasolina"
    ]
  },


  /* =========================
     INVERSORES SOLARES
     ========================= */

  {
    id: "felicity-8kw",
    name: "FELICITY SOLAR 8 kW",
    category: "Inversores solares",
    price: 1850,
    description: "Inversor solar híbrido FELICITY SOLAR.",
    specs: [
      "Potencia: 8 kW",
      "Híbrido",
      "110/220 V"
    ]
  },

  {
    id: "sunpal-10kw",
    name: "SUNPAL 10 kW",
    category: "Inversores solares",
    price: 1900,
    description: "Inversor solar SUNPAL de 10 kW.",
    specs: [
      "Potencia: 10 kW",
      "110/220 V"
    ]
  },

  {
    id: "must-3kw",
    name: "MUST 3 kW",
    category: "Inversores solares",
    price: 800,
    description: "Inversor solar MUST de 3 kW.",
    specs: [
      "Potencia: 3 kW",
      "110/220 V"
    ]
  },

  {
    id: "sumry-4kw",
    name: "SUMRY híbrido 4 kW",
    category: "Inversores solares",
    price: 500,
    description: "Inversor solar híbrido SUMRY.",
    specs: [
      "Potencia: 4 kW",
      "Híbrido"
    ]
  },

  {
    id: "sako-6kw",
    name: "SaKo 6 kW",
    category: "Inversores solares",
    price: 1200,
    description: "Inversor solar SaKo.",
    specs: [
      "Potencia: 6 kW",
      "110/220 V"
    ]
  },

  {
    id: "must-bifasico-6kw",
    name: "MUST bifásico 6 kW",
    category: "Inversores solares",
    price: 1350,
    description: "Inversor MUST bifásico de 6 kW.",
    specs: [
      "Potencia: 6 kW",
      "Bifásico"
    ]
  },

  {
    id: "sako-12kw",
    name: "SaKo 12 kW",
    category: "Inversores solares",
    price: 2200,
    description: "Inversor solar SaKo de alta potencia.",
    specs: [
      "Potencia: 12 kW",
      "110/220 V"
    ]
  },

  {
    id: "sako-1000w-2000wh",
    name: "SAKO 1000 W + batería integrada 2000 Wh",
    category: "Inversores solares",
    price: 900,
    description: "Sistema SAKO compacto con batería integrada.",
    specs: [
      "Potencia: 1000 W",
      "Batería integrada: hasta 2000 Wh",
      "110 V",
      "Onda sinusoidal pura",
      "MPPT integrado",
      "Cargador AC/solar",
      "Prioridad programable",
      "Compatible con red eléctrica o generador",
      "Transporte incluido"
    ]
  },

  {
    id: "sako-12000w",
    name: "SAKO 12000 W",
    category: "Inversores solares",
    price: 2100,
    description: "Inversor solar SAKO de 12 kW.",
    specs: [
      "Potencia: 12000 W",
      "Onda sinusoidal pura",
      "WiFi y GPRS local opcional",
      "Puede funcionar con o sin batería",
      "MPPT 120 A",
      "Transporte incluido"
    ]
  },

  {
    id: "sako-sunsee-amery-10kw",
    name: "SAKO SUNSEE AMERY 10000 W",
    category: "Inversores solares",
    price: 1900,
    description: "Inversor solar de fase dividida SAKO SUNSEE AMERY.",
    specs: [
      "120/240 V AC",
      "Fase dividida",
      "Entrada: 125–425 V DC",
      "41,66 A",
      "50/60 Hz",
      "Potencia nominal: 4200–12000 W",
      "Batería nominal: 48 V DC",
      "2 seguidores MPPT",
      "Corriente máxima MPPT: 220 A",
      "Onda sinusoidal pura",
      "Hasta 6 unidades en paralelo",
      "Transporte incluido"
    ]
  },

  {
    id: "kit-must-3000-5000",
    name: "Kit MUST 3000 W + batería MUST 5000 Wh",
    category: "Inversores solares",
    price: 2900,
    description: "Kit completo de inversor MUST con batería de 5 kWh.",
    specs: [
      "Inversor PV33-3024 TLV",
      "Salida: 110/220 V",
      "50/60 Hz",
      "Sobretensión: 9000 W",
      "Máxima capacidad fotovoltaica: 2500 W",
      "Rango MPPT: 30–230 V DC",
      "Batería: MUST LP16-48100",
      "Capacidad: 5 kWh",
      "200 Ah",
      "Eficiencia >96%",
      "Sistema modular",
      "Transporte incluido"
    ]
  },


  /* =========================
     KITS SOLARES TODO EN UNO
     ========================= */

  {
    id: "infinitysolar-all-in-one",
    name: "InfinitySolar todo en uno",
    category: "Kits solares",
    price: 4000,
    description: "Sistema solar todo en uno InfinitySolar.",
    specs: [
      "Inversor: 6 kW",
      "Respaldo indicado por proveedor: 15 Wh"
    ]
  },

  {
    id: "kit-solar-all-in-one",
    name: "Kit solar todo en uno",
    category: "Kits solares",
    price: 4300,
    description: "Sistema solar todo en uno.",
    specs: [
      "Inversor: 6 kW",
      "Respaldo indicado por proveedor: 16 kW"
    ]
  },


  /* =========================
     BATERÍAS
     ========================= */

  {
    id: "must-10kwh",
    name: "MUST 10 kWh",
    category: "Baterías",
    price: 3300,
    description: "Batería MUST de almacenamiento energético.",
    specs: [
      "Capacidad: 10 kWh"
    ]
  },


  /* =========================
     PANELES SOLARES
     ========================= */

  {
    id: "panel-bifacial-450",
    name: "Panel bifacial 450 W",
    category: "Paneles solares",
    price: 230,
    description: "Panel solar bifacial de 450 W.",
    specs: [
      "Potencia: 450 W",
      "Ideal para EcoFlow según proveedor"
    ]
  },

  {
    id: "panel-bifacial-620",
    name: "Panel bifacial 620 W",
    category: "Paneles solares",
    price: 260,
    description: "Panel solar bifacial de 620 W.",
    specs: [
      "Potencia: 620 W"
    ]
  },

  {
    id: "panel-boviet-545-bifacial",
    name: "Boviet Solar 545 W bifacial",
    category: "Paneles solares",
    price: 250,
    description: "Panel solar bifacial monocristalino Boviet Solar.",
    specs: [
      "Potencia: 545 W",
      "Monocristalino",
      "Bifacial"
    ]
  },

  {
    id: "panel-boviet-545",
    name: "BOVIET 545 W",
    category: "Paneles solares",
    price: 180,
    bulkPrice: 170,
    description: "Panel solar BOVIET 545 W.",
    specs: [
      "Precio por cantidad: $170",
      "Modelo: BVM7612M-545-H-HC-BF-DG",
      "Vmp: 42,58 V",
      "Imp: 12,82 A",
      "Transporte incluido",
      "Pallet: 31 unidades"
    ]
  },

  {
    id: "panel-milexus-500",
    name: "Milexus 500 W bifacial",
    category: "Paneles solares",
    price: 180,
    bulkPrice: 170,
    description: "Panel solar Milexus 500 W bifacial monocristalino.",
    specs: [
      "Precio por cantidad: $170",
      "Voc: 44,24 V",
      "Isc: 14,17 A",
      "Vmp: 36,82 V",
      "Imp: 13,58 A",
      "Fusible máximo: 30 A",
      "Voltaje máximo: 1500 V",
      "Tolerancia: 0 a +5 W",
      "Peso: 26 kg",
      "Dimensiones: 1914 × 1124 × 30 mm",
      "Transporte incluido",
      "Pallet: 36 unidades"
    ]
  },

  {
    id: "panel-boviet-550",
    name: "BOVIET 550 W bifacial",
    category: "Paneles solares",
    price: 180,
    bulkPrice: 170,
    description: "Panel solar BOVIET 550 W bifacial.",
    specs: [
      "Precio por cantidad: $170",
      "Monocristalino PERC",
      "Bifacial",
      "144 celdas Half-Cell",
      "10 Busbars",
      "Eficiencia hasta 21,1%",
      "Vmp: 42,76 V",
      "Imp: 12,88 A",
      "Voc: 50,13 V",
      "Isc: 13,84 A",
      "Doble vidrio",
      "Transporte incluido",
      "Pallet: 31 unidades"
    ]
  },

  {
    id: "panel-boviet-615",
    name: "BOVIET Solar 615 W bifacial",
    category: "Paneles solares",
    price: 260,
    description: "Panel solar BOVIET Solar 615 W bifacial monocristalino.",
    specs: [
      "Potencia: 615 W",
      "Bifacial",
      "Monocristalino",
      "Incluye conectores",
      "No incluye cables",
      "Transporte incluido",
      "Pallet: 31 unidades"
    ]
  },

  {
    id: "panel-jinko-535",
    name: "Jinko Solar 535 W",
    category: "Paneles solares",
    price: 180,
    bulkPrice: 170,
    description: "Panel solar Jinko Solar 535 W.",
    specs: [
      "Precio por cantidad: $170",
      "Vmp: 40,81 V",
      "Imp: 13,11 A",
      "Voc: 49,42 V",
      "Isc: 13,79 A",
      "Voltaje máximo: 1500 V DC",
      "Dimensiones: 2274 × 1134 × 40 mm",
      "Peso: 29,4 kg",
      "Transporte incluido",
      "Pallet: 31 unidades"
    ]
  },


  /* =========================
     ACCESORIOS SOLARES
     ========================= */

  {
    id: "soportes-paneles",
    name: "Soportes de paneles",
    category: "Accesorios solares",
    price: 110,
    description: "Soportes para instalación de paneles solares.",
    specs: []
  },


  /* =========================
     COMBOS SOLARES
     ========================= */

  {
    id: "combo-sako-milexus",
    name: "SAKO 1000 W + panel Milexus 500 W",
    category: "Combos solares",
    price: 1100,
    description: "Combo SAKO 1000 W con batería integrada y panel solar Milexus.",
    specs: [
      "SAKO 1000 W",
      "Batería integrada 2000 Wh",
      "Panel Milexus 500 W bifacial",
      "Transporte incluido"
    ]
  },

  {
    id: "combo-delta3max-450",
    name: "Delta 3 Max + panel 450 W + cable",
    category: "Combos solares",
    price: 1560,
    description: "EcoFlow Delta 3 Max con panel solar y cable de 10 m.",
    specs: [
      "Delta 3 Max",
      "Panel 450 W",
      "Cable 10 m"
    ]
  },

  {
    id: "combo-delta3max-545",
    name: "Delta 3 Max + panel 545 W + cable",
    category: "Combos solares",
    price: 1600,
    description: "EcoFlow Delta 3 Max con panel solar 545 W y cable.",
    specs: [
      "Delta 3 Max",
      "Panel 545 W",
      "Cable"
    ]
  },

  {
    id: "combo-delta3classic-450",
    name: "Delta 3 Classic + panel 450 W",
    category: "Combos solares",
    price: 850,
    description: "EcoFlow Delta 3 Classic con panel solar 450 W.",
    specs: [
      "Delta 3 Classic",
      "Panel 450 W"
    ]
  },

  {
    id: "combo-delta3classic-545",
    name: "Delta 3 Classic + panel 545 W",
    category: "Combos solares",
    price: 860,
    description: "EcoFlow Delta 3 Classic con panel solar 545 W.",
    specs: [
      "Delta 3 Classic",
      "Panel 545 W"
    ]
  },

  {
    id: "combo-delta3-450",
    name: "Delta 3 + panel 450 W + cable",
    category: "Combos solares",
    price: 920,
    description: "EcoFlow Delta 3 con panel solar 450 W y cable.",
    specs: [
      "Delta 3",
      "Panel 450 W",
      "Cable"
    ]
  },

  {
    id: "combo-delta3-545",
    name: "Delta 3 + panel 545 W + cable",
    category: "Combos solares",
    price: 940,
    description: "EcoFlow Delta 3 con panel solar 545 W y cable.",
    specs: [
      "Delta 3",
      "Panel 545 W",
      "Cable"
    ]
  },

  {
    id: "combo-classic-450-cable",
    name: "Delta 3 Classic + panel 450 W + cable 10 m",
    category: "Combos solares",
    price: 900,
    description: "Combo EcoFlow Delta 3 Classic con panel y cable de 10 m.",
    specs: [
      "Delta 3 Classic",
      "Panel 450 W",
      "Cable 10 m"
    ]
  },

  {
    id: "combo-classic-545-cable",
    name: "Delta 3 Classic + panel 545 W + cable 10 m",
    category: "Combos solares",
    price: 920,
    description: "Combo EcoFlow Delta 3 Classic con panel y cable de 10 m.",
    specs: [
      "Delta 3 Classic",
      "Panel 545 W",
      "Cable 10 m"
    ]
  },

  {
    id: "combo-plus-450",
    name: "Delta 3 Plus + panel bifacial 450 W + cable 10 m",
    category: "Combos solares",
    price: 1020,
    description: "Combo EcoFlow Delta 3 Plus con panel bifacial y cable.",
    specs: [
      "Delta 3 Plus",
      "Panel bifacial 450 W",
      "Cable 10 m"
    ]
  },

  {
    id: "combo-plus-545",
    name: "Delta 3 Plus + panel 545 W + cable 10 m",
    category: "Combos solares",
    price: 1040,
    description: "Combo EcoFlow Delta 3 Plus con panel y cable.",
    specs: [
      "Delta 3 Plus",
      "Panel 545 W",
      "Cable 10 m"
    ]
  },

  {
    id: "combo-panel-450-cable",
    name: "Panel 450 W + cable 10 m",
    category: "Combos solares",
    price: 290,
    description: "Panel solar 450 W con cable de 10 metros.",
    specs: [
      "Panel 450 W",
      "Cable 10 m"
    ]
  },

  {
    id: "combo-panel-545-cable",
    name: "Panel 545 W + cable 10 m",
    category: "Combos solares",
    price: 300,
    description: "Panel solar 545 W con cable de 10 metros.",
    specs: [
      "Panel 545 W",
      "Cable 10 m"
    ]
  }

];


/* =========================================================
   ESTADO
   ========================================================= */

let cart = JSON.parse(localStorage.getItem("voltiaCart")) || [];
let filteredProducts = [...products];


/* =========================================================
   UTILIDADES
   ========================================================= */

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(price);
}


function saveCart() {
  localStorage.setItem("voltiaCart", JSON.stringify(cart));
}


function getProduct(id) {
  return products.find(product => product.id === id);
}


/* =========================================================
   PRODUCTOS
   ========================================================= */

function renderProducts(list = filteredProducts) {

  const container =
    document.getElementById("productContainer") ||
    document.getElementById("products");

  if (!container) return;

  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = `
      <div class="empty-products">
        <h3>No encontramos productos</h3>
        <p>Prueba con otra búsqueda o categoría.</p>
      </div>
    `;
    return;
  }

  list.forEach(product => {

    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">
        <span>${getProductIcon(product.category)}</span>
      </div>

      <div class="product-info">

        ${
          product.badge
            ? `<span class="product-badge">${product.badge}</span>`
            : ""
        }

        <small>${product.category}</small>

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <div class="product-price">
          ${formatPrice(product.price)}
        </div>

        ${
          product.bulkPrice
            ? `<div class="bulk-price">
                 Precio por cantidad: ${formatPrice(product.bulkPrice)}
               </div>`
            : ""
        }

        <div class="product-actions">
          <button
            class="btn-secondary"
            onclick="showProduct('${product.id}')">
            Ver detalles
          </button>

          <button
            class="btn-primary"
            onclick="addToCart('${product.id}')">
            Añadir
          </button>
        </div>

      </div>
    `;

    container.appendChild(card);
  });
}


/* =========================================================
   ICONOS
   ========================================================= */

function getProductIcon(category) {

  const icons = {
    "Estaciones de energía": "🔋",
    "Plantas eléctricas": "⚡",
    "Inversores solares": "☀️",
    "Kits solares": "☀️",
    "Baterías": "🔋",
    "Paneles solares": "🌞",
    "Accesorios solares": "🔧",
    "Combos solares": "☀️"
  };

  return icons[category] || "⚡";
}


/* =========================================================
   FILTRADO
   ========================================================= */

function applyFilters() {

  const searchInput = document.getElementById("searchInput");

  const search = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";

  filteredProducts = products.filter(product => {

    const matchesSearch =
      !search ||
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    return matchesSearch;
  });

  renderProducts(filteredProducts);
}


/* =========================================================
   FILTRAR POR CATEGORÍA
   ========================================================= */

function filterByCategory(category) {

  filteredProducts = products.filter(
    product => product.category === category
  );

  renderProducts(filteredProducts);
}


/* =========================================================
   ORDENAR
   ========================================================= */

function sortProducts(order) {

  if (order === "price-low") {

    filteredProducts.sort(
      (a, b) => a.price - b.price
    );

  } else if (order === "price-high") {

    filteredProducts.sort(
      (a, b) => b.price - a.price
    );

  } else if (order === "name") {

    filteredProducts.sort(
      (a, b) => a.name.localeCompare(b.name)
    );

  } else {

    filteredProducts = [...products];
  }

  renderProducts(filteredProducts);
}


/* =========================================================
   DETALLE DEL PRODUCTO
   ========================================================= */

function showProduct(id) {

  const product = getProduct(id);

  if (!product) return;

  let modal = document.getElementById("productModal");

  if (!modal) {

    modal = document.createElement("div");

    modal.id = "productModal";

    modal.className = "product-modal";

    document.body.appendChild(modal);
  }

  modal.innerHTML = `

    <div class="modal-overlay" onclick="closeProduct()"></div>

    <div class="modal-content">

      <button
        class="modal-close"
        onclick="closeProduct()">
        ×
      </button>

      <div class="modal-icon">
        ${getProductIcon(product.category)}
      </div>

      <small>${product.category}</small>

      <h2>${product.name}</h2>

      <div class="modal-price">
        ${formatPrice(product.price)}
      </div>

      ${
        product.bulkPrice
          ? `<p><strong>Precio por cantidad:</strong>
             ${formatPrice(product.bulkPrice)}</p>`
          : ""
      }

      <p>${product.description}</p>

      ${
        product.specs.length
          ? `
            <h3>Especificaciones</h3>

            <ul>
              ${product.specs
                .map(spec => `<li>${spec}</li>`)
                .join("")}
            </ul>
          `
          : ""
      }

      <button
        class="btn-primary full-button"
        onclick="addToCart('${product.id}'); closeProduct();">
        Añadir al carrito
      </button>

      <a
        class="whatsapp-product"
        href="${getWhatsAppLink(product)}"
        target="_blank">
        Consultar por WhatsApp
      </a>

    </div>
  `;

  modal.classList.add("active");
}


function closeProduct() {

  const modal = document.getElementById("productModal");

  if (modal) {
    modal.classList.remove("active");
  }
}


/* =========================================================
   WHATSAPP PRODUCTO
   ========================================================= */

function getWhatsAppLink(product) {

  const message =
    `Hola VOLTIA 👋%0A%0A` +
    `Estoy interesado en:%0A` +
    `${product.name}%0A` +
    `Precio: ${formatPrice(product.price)}%0A%0A` +
    `¿Está disponible?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}


/* =========================================================
   CARRITO
   ========================================================= */

function addToCart(id) {

  const product = getProduct(id);

  if (!product) return;

  const existing = cart.find(
    item => item.id === id
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: id,
      quantity: 1
    });
  }

  saveCart();
  updateCartCounter();
  renderCart();

  openCart();
}


function removeFromCart(id) {

  cart = cart.filter(
    item => item.id !== id
  );

  saveCart();

  updateCartCounter();
  renderCart();
}


function changeQuantity(id, amount) {

  const item = cart.find(
    item => item.id === id
  );

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart();

  updateCartCounter();
  renderCart();
}


/* =========================================================
   CONTADOR DEL CARRITO
   ========================================================= */

function updateCartCounter() {

  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const counters = document.querySelectorAll(
    "#cartCount, .cart-count"
  );

  counters.forEach(counter => {
    counter.textContent = count;
  });
}


/* =========================================================
   TOTAL
   ========================================================= */

function getCartTotal() {

  return cart.reduce((total, item) => {

    const product = getProduct(item.id);

    if (!product) return total;

    return total + (
      product.price * item.quantity
    );

  }, 0);
}


/* =========================================================
   PANEL DEL CARRITO
   ========================================================= */

function createCartUI() {

  if (document.getElementById("cartPanel")) return;

  const panel = document.createElement("aside");

  panel.id = "cartPanel";

  panel.className = "cart-panel";

  panel.innerHTML = `

    <div class="cart-overlay"
         onclick="closeCart()"></div>

    <div class="cart-content">

      <div class="cart-header">

        <h2>Tu carrito</h2>

        <button
          onclick="closeCart()"
          class="cart-close">
          ×
        </button>

      </div>

      <div id="cartItems"></div>

      <div class="cart-footer">

        <div class="cart-total">
          <span>Total</span>
          <strong id="cartTotal">$0</strong>
        </div>

        <button
          class="btn-primary full-button"
          onclick="sendWhatsAppOrder()">
          Pedir por WhatsApp
        </button>

      </div>

    </div>
  `;

  document.body.appendChild(panel);
}


function renderCart() {

  const container =
    document.getElementById("cartItems");

  const totalElement =
    document.getElementById("cartTotal");

  if (!container) return;

  if (!cart.length) {

    container.innerHTML = `
      <div class="empty-cart">
        <div>🛒</div>
        <h3>Tu carrito está vacío</h3>
        <p>Añade productos para comenzar.</p>
      </div>
    `;

  } else {

    container.innerHTML = cart.map(item => {

      const product = getProduct(item.id);

      if (!product) return "";

      const subtotal =
        product.price * item.quantity;

      return `
        <div class="cart-item">

          <div class="cart-item-icon">
            ${getProductIcon(product.category)}
          </div>

          <div class="cart-item-info">

            <h4>${product.name}</h4>

            <strong>
              ${formatPrice(product.price)}
            </strong>

            <div class="quantity-controls">

              <button
                onclick="changeQuantity('${product.id}', -1)">
                −
              </button>

              <span>${item.quantity}</span>

              <button
                onclick="changeQuantity('${product.id}', 1)">
                +
              </button>

            </div>

            <small>
              Subtotal: ${formatPrice(subtotal)}
            </small>

          </div>

          <button
            class="remove-item"
            onclick="removeFromCart('${product.id}')">
            🗑
          </button>

        </div>
      `;

    }).join("");
  }

  if (totalElement) {
    totalElement.textContent =
      formatPrice(getCartTotal());
  }
}


/* =========================================================
   ABRIR / CERRAR CARRITO
   ========================================================= */

function openCart() {

  createCartUI();

  renderCart();

  const panel =
    document.getElementById("cartPanel");

  if (panel) {
    panel.classList.add("active");
  }
}


function closeCart() {

  const panel =
    document.getElementById("cartPanel");

  if (panel) {
    panel.classList.remove("active");
  }
}


/* =========================================================
   WHATSAPP — PEDIDO COMPLETO
   ========================================================= */

function sendWhatsAppOrder() {

  if (!cart.length) {

    alert("Tu carrito está vacío.");

    return;
  }

  let message =
    "Hola VOLTIA 👋\n\n" +
    "Quiero realizar este pedido:\n\n";

  cart.forEach(item => {

    const product =
      getProduct(item.id);

    if (!product) return;

    const subtotal =
      product.price * item.quantity;

    message +=
      `• ${product.name}\n` +
      `  Cantidad: ${item.quantity}\n` +
      `  Precio: ${formatPrice(product.price)}\n` +
      `  Subtotal: ${formatPrice(subtotal)}\n\n`;
  });

  message +=
    `TOTAL: ${formatPrice(getCartTotal())}\n\n` +
    "¿Me pueden confirmar disponibilidad y forma de entrega?";

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=` +
    encodeURIComponent(message);

  window.open(url, "_blank");
}


/* =========================================================
   BOTÓN DEL HEADER
   ========================================================= */

function connectCartButton() {

  const buttons = document.querySelectorAll(
    "#cartButton, .cart-button, [data-cart]"
  );

  buttons.forEach(button => {

    button.addEventListener(
      "click",
      openCart
    );

  });
}


/* =========================================================
   BÚSQUEDA
   ========================================================= */

function connectSearch() {

  const input =
    document.getElementById("searchInput");

  if (!input) return;

  input.addEventListener(
    "input",
    applyFilters
  );
}


/* =========================================================
   DETECTAR CATEGORÍA DE LA PÁGINA
   ========================================================= */

function detectPageCategory() {

  const body =
    document.body;

  const category =
    body.dataset.category;

  if (!category) return;

  filterByCategory(category);
}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    createCartUI();

    connectCartButton();

    connectSearch();

    updateCartCounter();

    renderCart();

    detectPageCategory();

    if (!document.body.dataset.category) {
      renderProducts();
    }

  }
);