const categorySlugs = {
  tech: "tecnologia",
  home: "hogar",
  fashion: "moda",
  beauty: "belleza",
  garden: "jardineria",
  toys: "juguetes",
  footwear: "calzados",
  sports: "deportes",
  tools: "herramientas",
  accessories: "accesorios",
  books: "libros",
  pets: "mascotas"
};

function normalizeProductName(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function findProductByName(name) {
  const normalizedName = normalizeProductName(name);
  return productos.find((product) => normalizeProductName(product.nombre) === normalizedName);
}

function parsePrice(priceText, fallback = 69900) {
  const price = Number((priceText || "").replace(/[^0-9]/g, ""));
  return price || fallback;
}

function getCategoryData(categorySlug) {
  const categories = {
    tecnologia: { nombre: "Tecnología", marca: "ClickTech" },
    hogar: { nombre: "Hogar", marca: "HomeCraft" },
    moda: { nombre: "Moda", marca: "UrbanStyle" },
    jardineria: { nombre: "Jardinería", marca: "GreenLife" },
    calzados: { nombre: "Calzados", marca: "MoveStyle" },
    herramientas: { nombre: "Herramientas", marca: "BuildMax" },
    juguetes: { nombre: "Juguetes", marca: "PlayFun" }
  };

  return categories[categorySlug] || { nombre: "Tecnología", marca: "ClickTech" };
}

function createProductFromCard(productCard, categorySlug, nameOverride) {
  const productName = nameOverride
    || productCard.querySelector("h1, h2, h3")?.textContent.trim()
    || "Producto destacado";
  const prices = productCard.querySelectorAll(".product-price-row strong, .daily-offer-prices strong, .price-block strong");
  const originalPrices = productCard.querySelectorAll(".product-price-row span, .daily-offer-original");
  const price = parsePrice(prices[0]?.textContent);
  const originalPrice = parsePrice(originalPrices[0]?.textContent, Math.round(price * 1.15));
  const category = getCategoryData(categorySlug);
  const image = productCard.querySelector("img")?.src || "";
  const description = productCard.querySelector(".daily-offer-description, .featured-promo-content p, .product-info > p")?.textContent.trim()
    || `Producto destacado de ${category.nombre.toLowerCase()} con excelente relación calidad-precio.`;
  const productId = 100000 + Array.from(normalizeProductName(productName)).reduce(
    (total, character) => total + character.charCodeAt(0),
    0
  );
  const product = {
    id: productId,
    nombre: productName,
    categoria: category.nombre,
    marca: category.marca,
    descripcion: description,
    precio: price,
    precioOriginal: originalPrice,
    descuento: Math.max(0, Math.round((1 - price / originalPrice) * 100)),
    stock: 20,
    rating: 4.6,
    reviews: 0,
    imagen: image,
    colores: [],
    destacado: true,
    envioGratis: price >= 100000,
    cuotas: 6,
    categoriaSlug: categorySlug
  };
  const savedProducts = JSON.parse(localStorage.getItem("customProducts") || "[]");
  const existingProduct = savedProducts.find((item) => item.id === product.id);

  if (!existingProduct) {
    savedProducts.push(product);
    localStorage.setItem("customProducts", JSON.stringify(savedProducts));
    productos.push(product);
  }

  return existingProduct || product;
}

function getCategorySlugFromCard(productCard) {
  const weeklyTrack = productCard.closest(".weekly-products-slider")?.querySelector(".weekly-products-track");
  const sectionLabel = weeklyTrack?.getAttribute("aria-label")?.toLowerCase() || "";
  const categoryText = productCard.querySelector(".daily-offer-category")?.textContent.toLowerCase() || "";

  if (productCard.classList.contains("hero-product-console")
    || productCard.classList.contains("hero-product-tv")
    || productCard.classList.contains("featured-promo-a")) {
    return "tecnologia";
  }

  if (productCard.classList.contains("featured-promo-b") || sectionLabel.includes("herramient")) {
    return "herramientas";
  }

  if (sectionLabel.includes("calzado")) {
    return "calzados";
  }

  if (sectionLabel.includes("juguete")) {
    return "juguetes";
  }

  if (sectionLabel.includes("jardiner")) {
    return "jardineria";
  }

  if (sectionLabel.includes("tech") || categoryText.includes("tecnolog")) {
    return "tecnologia";
  }

  if (categoryText.includes("moda")) {
    return "moda";
  }

  if (categoryText.includes("hogar")) {
    return "hogar";
  }

  return "tecnologia";
}

document.querySelectorAll(".category-card").forEach((categoryCard) => {
  const slug = Object.entries(categorySlugs).find(([className]) =>
    categoryCard.classList.contains(className)
  )?.[1];

  if (!slug) {
    return;
  }

  categoryCard.setAttribute("role", "link");
  categoryCard.setAttribute("tabindex", "0");
  const openCategory = (event) => {
    event?.preventDefault();
    const imageUrl = categoryCard.querySelector("img")?.src;
    const productName = categoryCard.querySelector("img")?.alt || "Producto destacado";
    const product = createProductFromCard(categoryCard, slug, productName);
    const imageParameter = imageUrl ? `&imagen=${encodeURIComponent(imageUrl)}` : "";
    window.location.href = `detalle-producto.html?id=${product.id}${imageParameter}`;
  };

  categoryCard.addEventListener("click", openCategory);
  categoryCard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCategory();
    }
  });
});

document.querySelectorAll(
  ".daily-offer-card, .weekly-product-card, .hero-product-label, .featured-promo-card"
).forEach((productCard) => {
  const productName = productCard.querySelector("h2, h3")?.textContent.trim();
  const product = productName ? findProductByName(productName) : null;

  productCard.setAttribute("role", "link");
  productCard.setAttribute("tabindex", "0");
  const openProduct = (event) => {
    event?.preventDefault();
    const productToOpen = product || createProductFromCard(productCard, getCategorySlugFromCard(productCard));

    const imageUrl = productCard.querySelector("img")?.src;
    const imageParameter = imageUrl ? `&imagen=${encodeURIComponent(imageUrl)}` : "";
    window.location.href = `detalle-producto.html?id=${productToOpen.id}${imageParameter}`;
  };

  productCard.addEventListener("click", openProduct);
  productCard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProduct();
    }
  });
});
