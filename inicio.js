const slides = document.querySelector(".slides");
const imagenes = document.querySelectorAll(".slides img");

const botonAnterior = document.querySelector(".prev");
const botonSiguiente = document.querySelector(".next");

let indice = 0;

botonSiguiente.addEventListener("click", () => {

indice++;

if (indice >= imagenes.length) {
    indice = 0;
}

  slides.style.transform = `translateX(-${indice * 100}%)`;
});


botonAnterior.addEventListener("click", () => {

indice--;

if (indice < 0) {
    indice = imagenes.length - 1;
}

  slides.style.transform = `translateX(-${indice * 100}%)`;
});

setInterval(() => {
  indice++;
  if (indice >= imagenes.length) {
    indice = 0;
  }
  slides.style.transform = `translateX(-${indice * 100}%)`;
}, 3000);

document.querySelectorAll(".weekly-products-slider").forEach((weeklyProductsSlider) => {
  const weeklyProductsTrack = weeklyProductsSlider.querySelector(".weekly-products-track");
  const weeklyProductsPrevious = weeklyProductsSlider.querySelector(".weekly-products-prev");
  const weeklyProductsNext = weeklyProductsSlider.querySelector(".weekly-products-next");

  function moveWeeklyProducts(direction) {
    const productCard = weeklyProductsTrack.querySelector(".weekly-product-card");
    const cardWidth = productCard.getBoundingClientRect().width;
    const gap = Number.parseFloat(getComputedStyle(weeklyProductsTrack).gap) || 0;

    weeklyProductsTrack.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth"
    });
  }

  weeklyProductsPrevious.addEventListener("click", () => moveWeeklyProducts(-1));
  weeklyProductsNext.addEventListener("click", () => moveWeeklyProducts(1));
});

const ingresarBtn = document.querySelector(".btn.btn-light");
ingresarBtn.addEventListener("click", () => {
  if(!localStorage.getItem("user")) {
    window.location.href = "login.html";
  }
  window.location.href = "inicio.html";
});

