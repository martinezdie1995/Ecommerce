document.querySelectorAll(".search-form").forEach((searchForm) => {
  const searchInput = searchForm.querySelector(".buscador");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
      window.location.href = `productos.html?busqueda=${encodeURIComponent(searchTerm)}`;
    }
  });
});
