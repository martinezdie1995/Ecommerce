const checkoutForm = document.querySelector("#checkoutForm");
const checkoutItems = document.querySelector("#checkoutItems");
const checkoutShipping = document.querySelector("#checkoutShipping");
const checkoutTotal = document.querySelector("#checkoutTotal");
const checkoutMessage = document.querySelector("#checkoutMessage");

function checkoutPrice(price) {
  return `$${price.toLocaleString("es-AR")}`;
}

function getCheckoutCart() {
  try {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return Array.isArray(cart) ? cart : [];
  } catch {
    return [];
  }
}

function renderCheckoutSummary() {
  const cart = getCheckoutCart();
  const products = cart
    .map((item) => ({ item, product: productos.find((product) => product.id === Number(item.id)) }))
    .filter(({ product, item }) => product && Number(item.quantity) > 0);
  const subtotal = products.reduce(
    (total, { item, product }) => total + product.precio * Number(item.quantity),
    0
  );
  const shipping = subtotal === 0 || subtotal >= 100000 ? 0 : 10000;

  checkoutItems.replaceChildren(...products.map(({ item, product }) => {
    const row = document.createElement("div");
    row.className = "summary-row";
    row.innerHTML = `<span>${product.nombre} x ${item.quantity}</span><strong>${checkoutPrice(product.precio * Number(item.quantity))}</strong>`;
    return row;
  }));

  checkoutShipping.textContent = shipping === 0 ? "Gratis" : checkoutPrice(shipping);
  checkoutTotal.textContent = checkoutPrice(subtotal + shipping);

  if (products.length === 0) {
    checkoutMessage.textContent = "No hay productos en el carrito.";
    checkoutForm.querySelector("button[type='submit']").disabled = true;
  }
}

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!checkoutForm.checkValidity()) {
    checkoutForm.reportValidity();
    return;
  }

  const email = checkoutForm.elements.email.value;
  checkoutMessage.textContent = `Te enviamos un correo a ${email} para finalizar la compra.`;
  checkoutMessage.classList.add("success");
  checkoutForm.querySelector("button[type='submit']").disabled = true;
  localStorage.removeItem("cart");
});

renderCheckoutSummary();
