const productParams = new URLSearchParams(window.location.search);
const productId = Number(productParams.get("id"));
const selectedImage = productParams.get("imagen");
const product = productos.find((item) => item.id === productId);

function formatPrice(price) {
  return `$${price.toLocaleString("es-AR")}`;
}

if (!product) {
  window.location.replace("productos.html");
} else {
  document.title = `${product.nombre} | ClickMarket`;
  document.querySelector("#productBreadcrumb").textContent = `Inicio / ${product.categoria} / ${product.nombre}`;
  document.querySelector("#productBrand").textContent = product.marca;
  document.querySelector("#productName").textContent = product.nombre;
  document.querySelector("#productRating").textContent = `★ ${product.rating}`;
  document.querySelector("#productReviews").textContent = `${product.reviews.toLocaleString("es-AR")} reseñas`;
  document.querySelector("#productPrice").textContent = formatPrice(product.precio);
  document.querySelector("#productOriginalPrice").textContent = formatPrice(product.precioOriginal);
  document.querySelector("#productDescription").textContent = product.descripcion;
  document.querySelector("#productInstallments").textContent = `Pago en ${product.cuotas} cuotas sin interés`;

  const productImage = document.querySelector("#productImage");
  productImage.src = selectedImage || product.imagen;
  productImage.alt = product.nombre;
  productImage.addEventListener("error", () => {
    productImage.src = `https://placehold.co/900x700/f0f2ff/1c1d21?text=${encodeURIComponent(product.nombre)}`;
  });

  const thumbs = document.querySelector("#productThumbs");
  thumbs.querySelector("img").src = selectedImage || product.imagen;
  thumbs.querySelector("img").alt = `Foto de ${product.nombre}`;

  const quantityInput = document.querySelector("#quantity");
  const updateQuantity = (change) => {
    const quantity = Math.max(1, Number(quantityInput.value) + change);
    quantityInput.value = quantity;
  };

  document.querySelector("#decreaseQuantity").addEventListener("click", () => updateQuantity(-1));
  document.querySelector("#increaseQuantity").addEventListener("click", () => updateQuantity(1));

  function addProductToCart() {
    const quantity = Math.max(1, Number(quantityInput.value) || 1);
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity = Number(existingProduct.quantity) + quantity;
    } else {
      cart.push({ id: product.id, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  document.querySelector("#addToCart").addEventListener("click", () => {
    addProductToCart();
    renderCart();
  });

  document.querySelector("#buyNow").addEventListener("click", () => {
    addProductToCart();
    window.location.href = "carrito.html";
  });
}
