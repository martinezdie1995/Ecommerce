async function fetchProducts() {
  try {
    const data = await fetch('https://dummyjson.com/products/?limit=0');
    const products = await data.json();
    console.log(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();

