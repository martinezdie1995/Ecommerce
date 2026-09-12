const cartStorageKey = "cart";
const cartItemsContainer = document.querySelector(".cart-items");
const cartButton = document.querySelector(".nav-actions .btn-primary");

function formatPrice(price) {
  return `$${price.toLocaleString("es-AR")}`;
}

function readCart() {
  try {
    const cart = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
    return Array.isArray(cart) ? cart : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(cartStorageKey, JSON.stringify(cart));
}

function updateCartAccess(cart) {
  const itemCount = cart.reduce((total, item) => total + Number(item.quantity), 0);

  document.querySelectorAll(".nav-actions .btn-primary").forEach((button) => {
    if (button === cartButton || !button.closest(".summary-card")) {
      button.textContent = `Carrito (${itemCount})`;
      button.type = "button";
      button.onclick = () => {
        window.location.href = "carrito.html";
      };
    }
  });
}

function renderEmptyCart() {
  cartItemsContainer.innerHTML = `
    <div class="empty-cart">
      <h2>Tu carrito está vacío</h2>
      <p>Agregá productos para verlos acá.</p>
      <button class="btn btn-primary" type="button" id="emptyCartButton">Ver productos</button>
    </div>
  `;
  document.querySelector("#emptyCartButton").addEventListener("click", () => {
    window.location.href = "productos.html";
  });
}

function renderCart() {
  const cart = readCart();
  updateCartAccess(cart);

  if (!cartItemsContainer) {
    return;
  }

  const cartProducts = cart
    .map((item) => ({
      item,
      product: productos.find((product) => product.id === Number(item.id))
    }))
    .filter(({ product, item }) => product && Number(item.quantity) > 0);

  if (cartProducts.length === 0) {
    renderEmptyCart();
  } else {
    cartItemsContainer.replaceChildren(...cartProducts.map(({ item, product }) => createCartItem(item, product)));
  }

  const subtotal = cartProducts.reduce(
    (total, { item, product }) => total + product.precio * Number(item.quantity),
    0
  );
  const originalTotal = cartProducts.reduce(
    (total, { item, product }) => total + product.precioOriginal * Number(item.quantity),
    0
  );
  const discount = originalTotal - subtotal;
  const shipping = subtotal === 0 || subtotal >= 100000 ? 0 : 10000;
  const total = subtotal + shipping;

  document.querySelector("#cartSubtotal").textContent = formatPrice(subtotal);
  document.querySelector("#cartShipping").textContent = shipping === 0 ? "Gratis" : formatPrice(shipping);
  document.querySelector("#cartDiscount").textContent = `-${formatPrice(discount)}`;
  document.querySelector("#cartTotal").textContent = formatPrice(total);
  document.querySelector("#checkoutButton").disabled = cartProducts.length === 0;
}

function createCartItem(item, product) {
  const article = document.createElement("article");
  article.className = "cart-item";
  article.innerHTML = `
    <img src="${product.imagen}" alt="${product.nombre}" />
    <div class="cart-info">
      <div class="cart-title-row">
        <div>
          <h3>${product.nombre}</h3>
          <p>${product.marca} · ${product.categoria}</p>
        </div>
        <button class="remove-product" type="button" aria-label="Quitar ${product.nombre}">Quitar</button>
      </div>
      <div class="cart-meta">
        <span>${formatPrice(product.precio)}</span>
        <div class="qty-control" aria-label="Cantidad de ${product.nombre}">
          <button type="button" data-action="decrease" aria-label="Disminuir cantidad">-</button>
          <span>${item.quantity}</span>
          <button type="button" data-action="increase" aria-label="Aumentar cantidad">+</button>
        </div>
      </div>
    </div>
  `;

  const image = article.querySelector("img");
  image.addEventListener("error", () => {
    image.src = `https://placehold.co/900x700/f0f2ff/1c1d21?text=${encodeURIComponent(product.nombre)}`;
  });

  article.querySelector("[data-action='decrease']").addEventListener("click", () => {
    updateProductQuantity(product.id, -1);
  });
  article.querySelector("[data-action='increase']").addEventListener("click", () => {
    updateProductQuantity(product.id, 1);
  });
  article.querySelector(".remove-product").addEventListener("click", () => {
    removeProduct(product.id);
  });

  return article;
}

function updateProductQuantity(productId, change) {
  const cart = readCart();
  const item = cart.find((cartItem) => Number(cartItem.id) === Number(productId));

  if (!item) {
    return;
  }

  item.quantity = Math.max(0, Number(item.quantity) + change);
  saveCart(cart.filter((cartItem) => cartItem.quantity > 0));
  renderCart();
}

function removeProduct(productId) {
  const cart = readCart().filter((item) => Number(item.id) !== Number(productId));
  saveCart(cart);
  renderCart();
}

const checkoutButton = document.querySelector("#checkoutButton");
const continueShoppingButton = document.querySelector("#continueShoppingButton");

if (checkoutButton && continueShoppingButton) {
  checkoutButton.addEventListener("click", () => {
    if (readCart().length > 0) {
      window.location.href = "checkout.html";
    }
  });

  continueShoppingButton.addEventListener("click", () => {
    window.location.href = "productos.html";
  });
}

renderCart();
