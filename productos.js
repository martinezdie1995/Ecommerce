const productGrid = document.querySelector(".product-grid");
const loadMoreButton = document.querySelector(".full-width");
const resultSummary = document.querySelector(".result-summary");
const categoryLinks = document.querySelectorAll("[data-category]");
const priceButtons = document.querySelectorAll("[data-min-price]");
const sortSelect = document.querySelector(".sort-bar select");
const productsPerPage = 12;
let visibleProductCount = 0;
let filteredProducts = [...productos];
const productParams = new URLSearchParams(window.location.search);
const requestedCategory = productParams.get("categoria");
const requestedSearch = productParams.get("busqueda")?.trim().toLowerCase() || "";
const activeFilters = {
  category: requestedCategory || "all",
  search: requestedSearch,
  minPrice: 0,
  maxPrice: Infinity,
  sort: "relevance"
};

function formatPrice(price) {
  return `$${price.toLocaleString("es-AR")}`;
}

function createProductCard(producto) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.setAttribute("role", "link");
  card.setAttribute("tabindex", "0");

  if (producto.descuento) {
    const badge = document.createElement("span");
    badge.className = "badge sale";
    badge.textContent = `-${producto.descuento}%`;
    card.appendChild(badge);
  }

  card.innerHTML += `
    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" />
    <div class="product-info">
      <h3>${producto.nombre}</h3>
      <p>${producto.marca} · ${producto.categoria}</p>
      <div class="product-price-row">
        <strong>${formatPrice(producto.precio)}</strong>
        <span>${formatPrice(producto.precioOriginal)}</span>
      </div>
    </div>
  `;

  const image = card.querySelector("img");
  image.addEventListener("error", () => {
    const fallbackText = encodeURIComponent(producto.nombre);
    image.src = `https://placehold.co/900x700/f0f2ff/1c1d21?text=${fallbackText}`;
    image.onerror = null;
  });

  const openProduct = () => {
    window.location.href = `detalle-producto.html?id=${producto.id}`;
  };
  card.addEventListener("click", openProduct);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProduct();
    }
  });

  return card;
}

function updateCatalogStatus() {
  const totalProducts = filteredProducts.length;
  const firstVisibleProduct = totalProducts === 0 ? 0 : 1;
  const lastVisibleProduct = Math.min(visibleProductCount, totalProducts);

  resultSummary.textContent = `Mostrando ${firstVisibleProduct}-${lastVisibleProduct} de ${totalProducts} productos`;
  loadMoreButton.hidden = visibleProductCount >= totalProducts;
}

function getFilteredProducts() {
  const products = productos.filter((producto) => {
    const matchesCategory = activeFilters.category === "all"
      || producto.categoriaSlug === activeFilters.category;
    const matchesPrice = producto.precio >= activeFilters.minPrice
      && producto.precio < activeFilters.maxPrice;
    const matchesSearch = !activeFilters.search
      || `${producto.nombre} ${producto.marca} ${producto.categoria}`.toLowerCase().includes(activeFilters.search);

    return matchesCategory && matchesPrice && matchesSearch;
  });

  return products.sort((firstProduct, secondProduct) => {
    if (activeFilters.sort === "price-asc") {
      return firstProduct.precio - secondProduct.precio;
    }

    if (activeFilters.sort === "price-desc") {
      return secondProduct.precio - firstProduct.precio;
    }

    if (activeFilters.sort === "newest") {
      return secondProduct.id - firstProduct.id;
    }

    return Number(secondProduct.destacado) - Number(firstProduct.destacado)
      || firstProduct.id - secondProduct.id;
  });
}

function renderProducts(reset = true) {
  if (reset) {
    visibleProductCount = 0;
    productGrid.replaceChildren();
  }

  const nextProducts = filteredProducts.slice(
    visibleProductCount,
    visibleProductCount + productsPerPage
  );
  productGrid.append(...nextProducts.map(createProductCard));
  visibleProductCount += nextProducts.length;
  updateCatalogStatus();
}

function applyFilters() {
  filteredProducts = getFilteredProducts();
  categoryLinks.forEach((link) => {
    const isActive = activeFilters.category === link.dataset.category;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-current", isActive ? "true" : "false");
  });
  priceButtons.forEach((button) => {
    const isActive = activeFilters.minPrice === Number(button.dataset.minPrice)
      && activeFilters.maxPrice === Number(button.dataset.maxPrice || Infinity);
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderProducts();
}

function loadMoreProducts() {
  renderProducts(false);
}

loadMoreButton.addEventListener("click", (event) => {
  event.preventDefault();
  loadMoreProducts();
});

categoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    activeFilters.category = activeFilters.category === link.dataset.category
      ? "all"
      : link.dataset.category;
    applyFilters();
  });
});

priceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isSameRange = activeFilters.minPrice === Number(button.dataset.minPrice)
      && activeFilters.maxPrice === Number(button.dataset.maxPrice || Infinity);

    activeFilters.minPrice = isSameRange ? 0 : Number(button.dataset.minPrice);
    activeFilters.maxPrice = isSameRange ? Infinity : Number(button.dataset.maxPrice || Infinity);
    applyFilters();
  });
});

sortSelect.addEventListener("change", () => {
  activeFilters.sort = sortSelect.value;
  applyFilters();
});

applyFilters();